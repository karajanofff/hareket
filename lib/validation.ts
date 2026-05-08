import { z } from "zod";
import { isValidYouTubeUrl } from "./youtube";

export const registerSchema = z
  .object({
    name: z.string().min(2, "Atıńız keminde 2 hárip bolıwı kerek"),
    email: z.string().email("Email durıs emes"),
    password: z.string().min(8, "Parol keminde 8 belgiden ibarat bolıwı kerek"),
    confirmPassword: z.string().min(8)
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Parollar sáykes emes",
    path: ["confirmPassword"]
  });

export const loginSchema = z.object({
  email: z.string().email("Email durıs emes"),
  password: z.string().min(1, "Paroldı kiritiń")
});

export const videoLessonSchema = z.object({
  title: z.string().min(3, "Video atı kerek"),
  description: z.string().min(10, "Qısqa túsindirme kerek"),
  youtubeUrl: z.string().refine(isValidYouTubeUrl, "YouTube link durıs emes"),
  category: z.string().min(2, "Kategoriya tańlań"),
  level: z.string().min(2, "Dáreje kerek"),
  duration: z.string().min(2, "Dawamlılıq kerek"),
  order: z.coerce.number().int().min(0)
});

export const quizSubmitSchema = z.object({
  answers: z.record(z.string(), z.enum(["A", "B", "C", "D"]))
});
