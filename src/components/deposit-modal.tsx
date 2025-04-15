
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface DepositModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: "deposit" | "withdraw";
}

const protocols = [
  { name: "Aave", apy: "4.2%", chain: "Ethereum" },
  { name: "Compound", apy: "3.8%", chain: "Ethereum" },
  { name: "Lido", apy: "5.1%", chain: "Ethereum" },
  { name: "Venus", apy: "6.2%", chain: "BSC" },
  { name: "Benqi", apy: "4.5%", chain: "Avalanche" },
];

export function DepositModal({ open, onOpenChange, mode }: DepositModalProps) {
  const [amount, setAmount] = useState<string>("");
  const [selectedProtocol, setSelectedProtocol] = useState<string>("");
  
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allow only numbers and a single decimal point
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };
  
  const handleSubmit = () => {
    // Handle deposit or withdraw action
    console.log(`${mode === 'deposit' ? 'Depositing' : 'Withdrawing'} ${amount} to ${selectedProtocol}`);
    // Reset form and close modal
    setAmount("");
    setSelectedProtocol("");
    onOpenChange(false);
  };
  
  const isFormValid = amount.trim() !== "" && parseFloat(amount) > 0 && selectedProtocol !== "";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-card">
        <DialogHeader>
          <DialogTitle>{mode === 'deposit' ? 'Deposit Funds' : 'Withdraw Funds'}</DialogTitle>
          <DialogDescription>
            {mode === 'deposit' 
              ? 'Select a protocol and enter the amount you want to deposit.' 
              : 'Select where you want to withdraw from and enter the amount.'}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="grid gap-2">
            <label htmlFor="protocol" className="text-sm font-medium">Protocol</label>
            <Select value={selectedProtocol} onValueChange={setSelectedProtocol}>
              <SelectTrigger>
                <SelectValue placeholder="Select a protocol" />
              </SelectTrigger>
              <SelectContent>
                {protocols.map((protocol) => (
                  <SelectItem key={protocol.name} value={protocol.name}>
                    <div className="flex justify-between items-center w-full">
                      <span>{protocol.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {protocol.apy} • {protocol.chain}
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <label htmlFor="amount" className="text-sm font-medium">Amount</label>
            <div className="relative">
              <Input
                id="amount"
                type="text"
                placeholder="0.0"
                value={amount}
                onChange={handleAmountChange}
                className="pr-12"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-muted-foreground">
                USD
              </div>
            </div>
          </div>
          {selectedProtocol && amount && parseFloat(amount) > 0 && (
            <div className={cn(
              "p-3 rounded-md text-sm",
              mode === 'deposit' ? "bg-secondary/20" : "bg-destructive/20"
            )}>
              <p className="font-medium">Transaction Preview</p>
              <div className="flex justify-between mt-2">
                <span className="text-muted-foreground">Protocol</span>
                <span>{selectedProtocol}</span>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-muted-foreground">Amount</span>
                <span>${parseFloat(amount).toFixed(2)}</span>
              </div>
              {mode === 'deposit' && (
                <div className="flex justify-between mt-1">
                  <span className="text-muted-foreground">Estimated APY</span>
                  <span className="text-success">
                    {protocols.find(p => p.name === selectedProtocol)?.apy || '0%'}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button 
            onClick={handleSubmit} 
            disabled={!isFormValid}
            className={mode === 'withdraw' ? "bg-destructive hover:bg-destructive/90" : ""}
          >
            {mode === 'deposit' ? 'Deposit' : 'Withdraw'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
