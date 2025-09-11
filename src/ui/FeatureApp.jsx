import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

export default function FeatureApp() {
  const [investment, setInvestment] = useState('');
  const [buyPrice, setBuyPrice] = useState('');
  const [sellPrice, setSellPrice] = useState('');
  const [result, setResult] = useState(null);

  const calculateProfit = (e) => {
    e.preventDefault();

    const inv = parseFloat(investment);
    const buy = parseFloat(buyPrice);
    const sell = parseFloat(sellPrice);

    if (!inv || !buy || !sell) {
      setResult(null);
      return;
    }

    const coins = inv / buy; // number of coins bought
    const finalValue = coins * sell;
    const profit = finalValue - inv;
    const profitPercent = (profit / inv) * 100;

    setResult({
      coins: coins.toFixed(4),
      finalValue: finalValue.toFixed(2),
      profit: profit.toFixed(2),
      profitPercent: profitPercent.toFixed(2),
    });
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ type: 'spring' }}
      className="flex flex-col gap-6 rounded-2xl bg-white px-14 py-16 pb-8 pt-8 text-primary shadow-lg"
    >
      {/* Header */}
      <div className="mx-auto w-fit text-center">
        <img src="/logo.png" alt="app logo" className="mx-auto h-12 w-12" />
        <h4 className="text-lg font-semibold">Crypto Profit Calculator</h4>
      </div>

      {/* Form */}
      <form onSubmit={calculateProfit} className="min-w-52">
        <div className="flex flex-col items-center gap-4">
          <label className="block w-full">
            Investment Amount ($)
            <input
              className="mt-1 block w-full rounded-full border border-primary px-4 py-[6px] text-base"
              type="number"
              value={investment}
              onChange={(e) => setInvestment(e.target.value)}
              placeholder="e.g. 1000"
            />
          </label>

          <label className="block w-full">
            Buy Price ($)
            <input
              className="mt-1 block w-full rounded-full border border-primary px-4 py-[6px] text-base"
              type="number"
              value={buyPrice}
              onChange={(e) => setBuyPrice(e.target.value)}
              placeholder="e.g. 50"
            />
          </label>

          <label className="block w-full">
            Sell Price ($)
            <input
              className="mt-1 block w-full rounded-full border border-primary px-4 py-[6px] text-base"
              type="number"
              value={sellPrice}
              onChange={(e) => setSellPrice(e.target.value)}
              placeholder="e.g. 80"
            />
          </label>

          <Button dark={true}>Calculate</Button>

          {/* Results */}
          {result && (
            <div className="mt-4 text-center text-gray-800">
              <p>
                You would own{' '}
                <span className="font-semibold">{result.coins}</span> coins
              </p>
              <p>
                Final Value:{' '}
                <span className="font-semibold">${result.finalValue}</span>
              </p>
              <p
                className={`font-semibold ${
                  result.profit >= 0 ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {result.profit >= 0 ? 'Profit' : 'Loss'}: ${result.profit} (
                {result.profitPercent}%)
              </p>
            </div>
          )}
        </div>
      </form>

      {/* Footer Links */}
      <div className=" flex justify-between gap-2  text-sm text-gray-800">
        <a className="hover:text-primary" href="#pricing">
          PRICING
        </a>
        <a className="hover:text-primary" href="#faqs">
          FAQS
        </a>
        <a className="hover:text-primary" href="#tradingBasics">
          TRADING BASICS
        </a>
      </div>
    </motion.div>
  );
}
