import React, { useState, useEffect } from "react";
import { formatTokenBalance } from "@/BlockscoutUtils"; // Adjust the import paths
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

interface TokenBalance {
  balance: string;
  contractAddress: string;
  decimals: string;
  name: string;
  symbol: string;
  type: string;
}

interface TokenDropdownProps {
  balances: TokenBalance[];
  isOpen: boolean;
  toggleDropdown: () => void;
  loading: boolean;
}

const TokenInfo: React.FC<TokenDropdownProps> = ({
  balances,
  isOpen,
  toggleDropdown,
  loading,
}) => {
  return (
    <div className="w-full md:w-1/2 max-w-xs mx-auto md:mx-1 mb-3 rounded-xl py-4 shadow-custom border border-slate-200 bg-white text-slate-950 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50">
      <div className="shadow-md overflow-x-auto">
        {/* Added overflow for better table handling */}
        <Table className="min-w-full rounded-xl">
          {/* Ensure table takes full width */}
          <TableHeader>
            <TableRow>
              <TableHead>Token</TableHead>
              <TableHead>Symbol</TableHead>
              <TableHead>Balance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell
                  colSpan={3}
                  className="px-6 py-4 text-center text-gray-500"
                >
                  Loading...
                </TableCell>
              </TableRow>
            ) : balances.length > 0 ? (
              balances.map((token) => (
                <TableRow key={token.contractAddress}>
                  <TableCell>{token.name}</TableCell>
                  <TableCell>{token.symbol}</TableCell>
                  <TableCell>
                    {formatTokenBalance(token.balance, token.decimals)}{" "}
                    {token.symbol}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={3}
                  className="px-6 py-4 text-center text-gray-500"
                >
                  No ERC-20 tokens found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TokenInfo;
