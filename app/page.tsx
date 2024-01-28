"use client"

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useState, useEffect } from "react";

export default function Component() {
  const [isSwitched, setIsSwitched] = useState<boolean>(false);

  const stringToHex = (str) => {
    let hex = '';
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
      const hexValue = charCode.toString(16);
  
      // Pad with zeros to ensure two-digit representation
      hex += hexValue.padStart(2, '0');
    }
    return hex;
  };

  const hexToString = (hex) => {
    let str = '';
    for (let i = 0; i < hex.length; i += 2) {
      const hexValue = hex.substr(i, 2);
      const decimalValue = parseInt(hexValue, 16);
      str += String.fromCharCode(decimalValue);
    }
    return str;
  };


  return (
    <main key="1" className="w-full p-6 ">
      <div className="w-full h-20  flex items-center justify-center px-6">
        <h1 className="text-2xl font-bold text-white">
          The Encryption Aspect{" "}
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-6 mt-6 items-center justify-center px-6">
        <Card className="w-1/4 h-[30rem] flex items-center  justify-center mx-auto border border border-white">
          <CardContent className="space-y-[3rem]">
            <form className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="name4">{isSwitched?"Enter The CipherText":"Enter the Message"}</Label>
                <Input id="name4" placeholder="message" />
                <Input id="name4" placeholder="key" />
                <Button className="bg-sky-500 text-white">{isSwitched?"Decrypt":"Encrypt"}</Button>
              </div>
            </form>
            <div className="flex items-center space-x-2">
              <Switch
                id="airplane-mode"
                checked={isSwitched}
                onCheckedChange={() => setIsSwitched(!isSwitched)}
              />
              <label htmlFor="airplane-mode" id="switch-label">
                {isSwitched?"Decrypt":"Encrypt"}
              </label>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}