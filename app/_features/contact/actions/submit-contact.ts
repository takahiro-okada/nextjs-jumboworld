"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "名前を入力してください"),
  furigana: z.string().min(1, "フリガナを入力してください"),
  phone: z.string().min(1, "電話番号を入力してください"),
  email: z.string().email("正しいメールアドレスを入力してください"),
  consultationType: z.enum(["online", "visit"]),
  message: z.string().min(1, "ご相談内容を入力してください"),
});

export async function submitContact(formData: FormData) {
  try {
    const validatedFields = contactSchema.parse({
      name: formData.get("name"),
      furigana: formData.get("furigana"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      consultationType: formData.get("consultationType"),
      message: formData.get("message"),
    });

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Here you would typically send the data to your API or email service
    console.log("Form submitted:", validatedFields);

    return { success: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        errors: error.errors.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {} as Record<string, string>),
      };
    }
    return {
      success: false,
      message: "送信に失敗しました。もう一度お試しください。",
    };
  }
}
