import { z } from "zod";
import { isValidYouTubeUrl } from "./youtube";

export const registerSchema = z
  .object({
    name: z.string().min(2, "At maydanı bos bolmawı kerek"),
    email: z.string().email("Email forması nadurıs"),
    password: z.string().min(6, "Parol keminde 6 belgiden ibarat bolıwı kerek"),
    confirmPassword: z.string().min(6, "Paroldı tastıyıqlaw maydanı bos bolmawı kerek")
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Parollar sáykes emes",
    path: ["confirmPassword"]
  });

export const loginSchema = z.object({
  email: z.string().email("Email forması nadurıs"),
  password: z.string().min(1, "Parol maydanı bos bolmawı kerek")
});

export const videoLessonSchema = z.object({
  title: z.string().min(3, "Tema atı kirgiziliwi kerek"),
  description: z.string().min(10, "Sıpatlama kirgiziliwi kerek"),
  youtubeUrl: z.string().refine(isValidYouTubeUrl, "YouTube siltemesi nadurıs"),
  category: z.string().min(2, "Kategoriya tańlanıwı kerek"),
  level: z.string().min(2, "Dáreje kirgiziliwi kerek"),
  duration: z.string().min(2, "Dawamlılıq kirgiziliwi kerek"),
  order: z.coerce.number().int().min(0)
});

export const quizSubmitSchema = z.object({
  answers: z.record(z.string(), z.enum(["A", "B", "C", "D"]))
});
