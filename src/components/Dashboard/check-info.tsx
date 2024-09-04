import {
  CheckIcon,
  LockClosedIcon,
  PersonIcon,
  LockOpen2Icon,
  Cross1Icon,
  ExclamationTriangleIcon,
} from "@radix-ui/react-icons";
import { KYCViewerInfo } from "@/KYCViewerService";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LOCATION_ITEMS } from "@/constants";
import Image from "next/image";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

interface CheckInfoProps {
  recipientAddress: string;
  recipientInfo: KYCViewerInfo | null;
  setRecipientAddress: (address: string) => void;
}

export function CheckInfo({
  recipientAddress,
  recipientInfo,
  setRecipientAddress,
}: CheckInfoProps) {
  return (
    <Card className="relative w-full max-w-xs mx-auto">
      <CardHeader className="p-3">
        <CardTitle>Security Check</CardTitle>
        <CardDescription className="overflow-x-hidden">
          {recipientInfo?.getWalletOwners[0]}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-1">
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label>Name</Label>
              <Input
                onChange={(e) => setRecipientAddress(e.target.value)}
                placeholder="Name of your project"
              />
            </div>
          </div>
        </form>
        <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
          {recipientInfo?.isKYC ? (
            <Cross1Icon className="mt-px h-5 w-5" />
          ) : (
            <CheckIcon className="mt-px h-5 w-5" />
          )}
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">KYC Trusted</p>
            <p className="text-sm text-muted-foreground">
              Follows KYC compliance
            </p>
          </div>
        </div>
        <div className="-mx-2 flex items-start space-x-4 rounded-md bg-accent p-2 text-accent-foreground transition-all">
          <LockClosedIcon className="mt-px h-5 w-5" />
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">Sanction Safe</p>
            <p className="text-sm text-muted-foreground">
              No hacks, stolen, and/or duplicated identity
            </p>
          </div>
        </div>
        <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
          <PersonIcon className="mt-px h-5 w-5" />
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">
              {recipientInfo?.isCorporate
                ? "Corporate Account"
                : "Individual Account"}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
