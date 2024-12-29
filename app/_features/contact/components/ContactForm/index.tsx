"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export function ContactForm() {
  return (
    <form className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">お名前</Label>
          <Input
            id="name"
            name="name"
            required
            className="mt-1"
            aria-describedby="name-error"
          />
        </div>

        <div>
          <Label htmlFor="furigana">フリガナ</Label>
          <Input
            id="furigana"
            name="furigana"
            required
            className="mt-1"
            aria-describedby="furigana-error"
          />
          {state?.errors?.furigana && (
            <p className="text-red-500 text-sm mt-1" id="furigana-error">
              {state.errors.furigana}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="phone">電話番号</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-1"
            aria-describedby="phone-error"
          />
          {state?.errors?.phone && (
            <p className="text-red-500 text-sm mt-1" id="phone-error">
              {state.errors.phone}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="email">メールアドレス</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1"
            aria-describedby="email-error"
          />
          {state?.errors?.email && (
            <p className="text-red-500 text-sm mt-1" id="email-error">
              {state.errors.email}
            </p>
          )}
        </div>

        <div>
          <Label>ご相談方法</Label>
          <RadioGroup
            name="consultationType"
            className="flex gap-4 mt-1"
            defaultValue="online"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="online" id="online" />
              <Label htmlFor="online">オンライン</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="visit" id="visit" />
              <Label htmlFor="visit">ご来店</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="message">ご相談内容</Label>
          <Textarea
            id="message"
            name="message"
            required
            className="mt-1 min-h-[200px]"
            aria-describedby="message-error"
          />
          {state?.errors?.message && (
            <p className="text-red-500 text-sm mt-1" id="message-error">
              {state.errors.message}
            </p>
          )}
        </div>
      </div>

      <div className="text-center">
        <Button type="submit" size="lg" disabled={pending}>
          {pending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              送信中...
            </>
          ) : (
            "お問い合わせする"
          )}
        </Button>
      </div>

      {state?.success && (
        <div className="bg-green-50 text-green-800 p-4 rounded-md text-center">
          お問い合わせを受け付けました。担当者より連絡させていただきます。
        </div>
      )}

      {state?.message && !state.success && (
        <div className="bg-red-50 text-red-800 p-4 rounded-md text-center">
          {state.message}
        </div>
      )}
    </form>
  );
}
