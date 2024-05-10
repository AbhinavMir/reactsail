"use client";

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { useState } from 'react';
import { Label } from "@/components/ui/label"
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group"
import { JSX, SVGProps } from "react"

export function Header() {
  const [checkedStates, setCheckedStates] = useState({
    extension1: false,
    extension2: false,
    extension3: false,
    extension4: false,
    extension5: false,
    format1: false,
    format2: false,
    format3: false,
    format4: false,
    format5: false
  });

  const handleCheckboxChange = (name: string) => (checked: boolean) => {
    setCheckedStates(prev => ({ ...prev, [name]: checked }));
  };

  const [radioValue, setRadioValue] = useState('text1');

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center space-x-4">
        <div className="relative flex-1">
          <Input className="pr-10" placeholder="Search..." type="text" />
          <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Extensions
              <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Extensions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked={checkedStates.extension1} onCheckedChange={handleCheckboxChange("extension1")}>Extension 1</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={checkedStates.extension2} onCheckedChange={handleCheckboxChange("extension2")}>Extension 2</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={checkedStates.extension3} onCheckedChange={handleCheckboxChange("extension3")}>Extension 3</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={checkedStates.extension4} onCheckedChange={handleCheckboxChange("extension4")}>Extension 4</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={checkedStates.extension5} onCheckedChange={handleCheckboxChange("extension5")}>Extension 5</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Instruction Formats
              <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Instruction Formats</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked={checkedStates.format1} onCheckedChange={handleCheckboxChange("format1")}>Format 1</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={checkedStates.format2} onCheckedChange={handleCheckboxChange("format2")}>Format 2</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={checkedStates.format3} onCheckedChange={handleCheckboxChange("format3")}>Format 3</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={checkedStates.format4} onCheckedChange={handleCheckboxChange("format4")}>Format 4</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={checkedStates.format5} onCheckedChange={handleCheckboxChange("format5")}>Format 5</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div>
        <RadioGroup value={radioValue} onValueChange={setRadioValue}>
          <RadioGroupItem id="text1" value="text1">
            <Label htmlFor="text1">Text 1</Label>
          </RadioGroupItem>
          <RadioGroupItem id="text2" value="text2">
            <Label htmlFor="text2">Text 2</Label>
          </RadioGroupItem>
        </RadioGroup>
      </div>
    </div>
  )
}

function ChevronDownIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}