export const runtime = 'nodejs'; // ensure not Edge
import 'server-only';
import { CaseOpening, CoinHistory, connection } from './model';
import { Transaction } from './model/connection';

export const findHistoryByDiscordId = (discordId: string) => {
  return CoinHistory.findAll({
    where: { discordId },
    order: [['createdAt', 'DESC']],
    raw: true,
  });
};

export const findHistory = (page: number = 0) => {
  return CoinHistory.findAll({
    order: [['createdAt', 'DESC']],
    limit: 100,
    offset: page * 100,
    raw: true,
  });
};

export const addMoney = async (
  discordId: string,
  idCitizen: string,
  money: number
) => {
  if (typeof money !== 'number' || !Number.isFinite(money) || money === 0) {
    throw new Error('money must be a non-zero number');
  }

  const deltaGold = money / 1000;

  return connection.transaction(
    { isolationLevel: Transaction.ISOLATION_LEVELS.REPEATABLE_READ },
    async (t: Transaction) => {
      const row = await CaseOpening.findOne({
        where: { citizenid: idCitizen },
        transaction: t,
        lock: t.LOCK.UPDATE,
      });

      if (!row) {
        return null;
      }

      await row.increment('goldcoin', { by: deltaGold, transaction: t });

      const history = await CoinHistory.create(
        {
          citizenid: idCitizen,
          discordId,
          money,
          createdAt: new Date().toISOString(),
        },
        { transaction: t }
      );

      const reloaded = await row.reload({ transaction: t });
      return {
        goldcoin: reloaded.goldcoin,
        history: history.get({ plain: true }),
      };
    }
  );
};
