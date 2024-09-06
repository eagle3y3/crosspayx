import { CheckIcon, LockClosedIcon, PersonIcon } from "@radix-ui/react-icons";
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

interface UserInfoProps {
  accountInfo: KYCViewerInfo | null;
}

export function UserInfo({ accountInfo }: UserInfoProps) {
  function findCountryByNumericCode(numericCode: string | undefined) {
    if (!numericCode) return undefined; // Handle undefined or empty string case

    const numericCodeStr = numericCode.toString();
    return LOCATION_ITEMS.find((item) => item.numericCode === numericCodeStr);
  }

  const country = findCountryByNumericCode(accountInfo?.getCountry);

  const flagUrl = `https://GlobalArtInc.github.io/round-flags/flags/${country?.code.toLowerCase()}.svg`;

  return (
    <Card className="relative flex-grow w-full md:w-1/4 mx-auto md:mx-1 max-w-xs mb-3">
      <CardHeader className="p-3">
        <CardTitle>Wallet</CardTitle>
        <CardDescription className="overflow-x-hidden">
          {accountInfo?.getWalletOwners[0]}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-1">
        <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
          <CheckIcon className="mt-px h-5 w-5" />
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
              {accountInfo?.isCorporate
                ? "Corporate Account"
                : "Individual Account"}
            </p>
          </div>
        </div>
      </CardContent>
      <div className="absolute bottom-2 right-2">
        <div className="relative">
          <Image src={flagUrl} height={25} width={25} alt="Country Flag" />
          <div className="absolute bottom-[-4px] right-[-4px] bg-green-500 rounded-full p-[2px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </Card>
  );
}
