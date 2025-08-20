"use client";

import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// Types
interface WalletState {
  isConnected: boolean;
  address: string;
  balance: number;
  isConnecting: boolean;
  error: string | null;
}

type WalletAction =
  | { type: 'CONNECT_START' }
  | { type: 'CONNECT_SUCCESS'; payload: { address: string; balance: number } }
  | { type: 'CONNECT_ERROR'; payload: string }
  | { type: 'DISCONNECT' }
  | { type: 'UPDATE_BALANCE'; payload: number };

interface WalletContextType extends WalletState {
  connect: () => Promise<void>;
  disconnect: () => void;
  updateBalance: (balance: number) => void;
}

// Initial state
const initialState: WalletState = {
  isConnected: false,
  address: '',
  balance: 0,
  isConnecting: false,
  error: null,
};

// Reducer
function walletReducer(state: WalletState, action: WalletAction): WalletState {
  switch (action.type) {
    case 'CONNECT_START':
      return {
        ...state,
        isConnecting: true,
        error: null,
      };
    case 'CONNECT_SUCCESS':
      return {
        ...state,
        isConnected: true,
        isConnecting: false,
        address: action.payload.address,
        balance: action.payload.balance,
        error: null,
      };
    case 'CONNECT_ERROR':
      return {
        ...state,
        isConnecting: false,
        error: action.payload,
      };
    case 'DISCONNECT':
      return {
        ...initialState,
      };
    case 'UPDATE_BALANCE':
      return {
        ...state,
        balance: action.payload,
      };
    default:
      return state;
  }
}

// Context
const WalletContext = createContext<WalletContextType | undefined>(undefined);

// Provider component
interface WalletProviderProps {
  children: ReactNode;
}

export function WalletProvider({ children }: WalletProviderProps) {
  const [state, dispatch] = useReducer(walletReducer, initialState);

  const connect = async () => {
    dispatch({ type: 'CONNECT_START' });
    
    try {
      // Simulate wallet connection
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock wallet data
      const mockAddress = '0x742d35Cc6634C0532925a3b8D56B9C3A28dC3F8';
      const mockBalance = Math.floor(Math.random() * 10000);
      
      dispatch({
        type: 'CONNECT_SUCCESS',
        payload: {
          address: mockAddress,
          balance: mockBalance,
        },
      });
    } catch (error) {
      dispatch({
        type: 'CONNECT_ERROR',
        payload: error instanceof Error ? error.message : 'Failed to connect wallet',
      });
    }
  };

  const disconnect = () => {
    dispatch({ type: 'DISCONNECT' });
  };

  const updateBalance = (balance: number) => {
    dispatch({ type: 'UPDATE_BALANCE', payload: balance });
  };

  const value: WalletContextType = {
    ...state,
    connect,
    disconnect,
    updateBalance,
  };

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  );
}

// Hook to use wallet context
export function useWalletContext() {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWalletContext must be used within a WalletProvider');
  }
  return context;
}
