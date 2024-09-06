import {
  CheckIcon,
  LockClosedIcon,
  PersonIcon,
  LockOpen2Icon,
  Cross1Icon,
  ExclamationTriangleIcon,
  LockOpen1Icon,
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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface CheckInfoProps {
  recipientAddress: string;
  recipientInfo: KYCViewerInfo | null;
  setRecipientAddress: (address: string) => void;
  destinationKYCError: string | null;
}

export function CheckInfo({
  recipientAddress,
  recipientInfo,
  setRecipientAddress,
  destinationKYCError,
}: CheckInfoProps) {
  return (
    <Card className="md:max-w-xs  w-11/12 mx-auto md:mx-1 mb-3">
      <CardHeader className="p-3">
        <CardTitle>Security Check</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-1 transition-all duration-300">
        {/* Smooth transition */}
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label>Check Recipient</Label>
              <Input
                onChange={(e) => setRecipientAddress(e.target.value)}
                placeholder="Enter Recipient Address"
              />
            </div>
          </div>
        </form>
        {recipientAddress && recipientInfo ? (
          <div className="space-y-2 transition-all duration-300">
            <div className="flex items-start space-x-4 p-2 hover:bg-accent hover:text-accent-foreground rounded-md">
              {recipientInfo.isKYC ? (
                <CheckIcon className="mt-px h-5 w-5" />
              ) : (
                <Cross1Icon className="mt-px h-5 w-5" />
              )}
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">KYC Trusted</p>
                <p className="text-sm text-muted-foreground">
                  Follows KYC compliance
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-2 bg-accent text-accent-foreground rounded-md">
              {recipientInfo.isKYC ? (
                <LockClosedIcon className="mt-px h-5 w-5" />
              ) : (
                <LockOpen2Icon className="mt-px h-5 w-5" />
              )}
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  Sanction Safe
                </p>
                <p className="text-sm text-muted-foreground">
                  No hacks, stolen, and/or duplicated identity
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-2 hover:bg-accent hover:text-accent-foreground rounded-md">
              <PersonIcon className="mt-px h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {recipientInfo.isCorporate
                    ? "Corporate Account"
                    : "Individual Account"}
                </p>
              </div>
            </div>
          </div>
        ) : null}
        {destinationKYCError && recipientAddress ? (
          <Alert variant="destructive">
            <ExclamationTriangleIcon className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              {"This is NOT Kinto Wallet Approved."}
            </AlertDescription>
          </Alert>
        ) : null}
      </CardContent>
    </Card>
  );
}
