"use client";
import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { MinusIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function InputOTP({
  className,
  containerClassName,
  maxLength = 6,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string;
  maxLength?: number;
}) {
  const handleChange = (value: string) => {
    if (value.length === maxLength) {
      console.log("OTP:", value);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = [
      "Backspace",
      "ArrowLeft",
      "ArrowRight",
      "Tab",
      "Delete",
    ];

    if (
      !/^[0-9]$/.test(event.key) &&
      !allowedKeys.includes(event.key)
    ) {
      event.preventDefault();
    }
  };

  return (
  
    <OTPInput
    data-slot="input-otp"
    containerClassName={cn("flex items-center gap-2 has-disabled:opacity-50", containerClassName)}
    className={cn("disabled:cursor-not-allowed", className)}
    type="tel"
    pattern="[0-9]*"
    inputMode="numeric" 
    maxLength={maxLength}
    onKeyDown={handleKeyDown}
    onChange={handleChange}
    {...props}
  />
  );
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="input-otp-group" className={cn("flex items-center", className)} {...props} />;
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  index: number;
}) {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, isActive } = inputOTPContext?.slots[index] ?? {};

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        "mt-[40px] flex items-center justify-center text-[#797A7C] font-semibold text-lg rounded-lg bg-[#212121] py-[18px] px-[20px] mx-1",
        "lg:w-[60px] lg:h-[60px] w-[50px] h-[50px] ",
        "border border-transparent data-[active=true]:border-white",
        "aria-invalid:border-red-500 data-[active=true]:aria-invalid:border-red-500",
        "transition-[border-color] duration-200 ",
        className
      )}
      {...props}
    >
      {char}
    </div>
  );
}

function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon />
    </div>
  );
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };