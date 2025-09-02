"use client";

import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useEffect, useState } from 'react';

export function WalletButton() {
  const { publicKey, connected } = useWallet();
  const [balance, setBalance] = useState<number>(0);

  // Load balance from localStorage or backend
  useEffect(() => {
    if (connected && publicKey) {
      // For now, load from localStorage
      // Later we can fetch from backend using wallet address
      const savedBalance = parseInt(localStorage.getItem('owatch_balance') || '0');
      setBalance(savedBalance);
    }
  }, [connected, publicKey]);

  const formatWalletAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  if (!connected) {
    return (
      <WalletMultiButton
        className="!bg-purple-600 hover:!bg-purple-700 !text-white !rounded-lg !px-4 !py-2 !font-medium !transition-colors"
        style={{
          backgroundColor: '#7c3aed',
          border: 'none',
          borderRadius: '8px',
          padding: '8px 16px',
          fontSize: '14px',
          fontWeight: '500'
        }}
      />
    );
  }

  return (
    <div className="flex items-center space-x-4">
      {/* Balance Display */}
      <div className="flex items-center space-x-2 bg-gray-800 px-3 py-2 rounded-lg">
        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
        <span className="text-white font-semibold text-sm">{balance} OWATCH</span>
      </div>

      {/* Wallet Info */}
      <div className="flex items-center space-x-2 bg-gray-800 px-3 py-2 rounded-lg">
        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
        <span className="text-white text-sm">
          {publicKey ? formatWalletAddress(publicKey.toString()) : 'Connected'}
        </span>
      </div>

      {/* Disconnect Button */}
      <WalletMultiButton
        className="!bg-red-600 hover:!bg-red-700 !text-white !rounded-lg !px-3 !py-2 !text-sm !font-medium !transition-colors"
        style={{
          backgroundColor: '#dc2626',
          border: 'none',
          borderRadius: '8px',
          padding: '6px 12px',
          fontSize: '12px',
          fontWeight: '500'
        }}
      />
    </div>
  );
}
