# road-rules-video-platform

Diplom mavzusi: **“Kompyuter grafikasidan foydalanib yo‘l harakati qoidalarini o‘rgatuvchi platforma ishlab chiqish”**.

Platforma Qoraqalpoq tilidagi premium dark automotive-learning web ilova bo‘lib, yo‘l harakati qoidalarini SVG yo‘l belgilar, YouTube video darslar, matnli darslar, testlar va progress grafiklari orqali o‘rgatadi.

## Texnologiyalar

- Next.js App Router, TypeScript, React
- Tailwind CSS, shadcn uslubidagi komponentlar
- Prisma ORM, SQLite lokal baza, PostgreSQLga ko‘chirishga tayyor model
- Zod validatsiya, bcryptjs, cookie/session auth
- YouTube iframe embed, SVG road signs
- Recharts, Lucide React, Framer Motion

## Asosiy modullar

- **YouTube video darslar**: `/videos`, `/videos/[id]`, responsive iframe player, category filter, search, watched progress.
- **Yo‘l belgilar katalogi**: `/signs`, `/signs/[id]`, sifatli SVG belgilar va real qo‘llanish izohlari.
- **Test moduli**: `/quiz`, random 10 savol, 4 variant, explanation va natijani bazaga saqlash.
- **Kabinet va natijalar**: `/dashboard`, `/results`, video progress, test statistikasi, Recharts grafiklari.
- **Admin panel**: `/admin`, `/admin/videos`, `/admin/lessons`, `/admin/signs`, `/admin/questions`, `/admin/users`.

## Ma’lumotlar bazasi

Prisma modellari: `User`, `Lesson`, `VideoLesson`, `VideoProgress`, `RoadSign`, `QuizQuestion`, `QuizResult`, `LessonProgress`.

Seed tarkibi:

- 6 ta matnli dars
- 12 ta YouTube video dars
- 25 ta yo‘l belgisi
- 40 ta test savoli
- 1 ta admin user
- 2 ta oddiy demo user

## Ishga tushirish

```bash
npm install
npx prisma migrate dev --name init
npx prisma db seed
npm run dev
```

Lokal manzil:

```text
http://localhost:3001
```

Demo admin:

```text
admin@example.com
admin12345
```

## Render deploy

Render.com orqali ulash uchun loyihada `render.yaml` tayyor:

- Service type: `web`
- Runtime: `node`
- Plan: `free`
- Build Command: `npm install && npx prisma generate && npm run build`
- Start Command: `npx prisma migrate deploy && npx prisma db seed && npm start`

Render Dashboard orqali ulash:

1. Loyihani GitHub repositoryga yuklang.
2. Render.com saytida **New +** tugmasini bosing.
3. **Blueprint** tanlang.
4. GitHub repositoryni ulang.
5. Render `render.yaml` faylini avtomatik o‘qiydi.
6. Deploy tugagach, berilgan `onrender.com` link orqali platformani oching.

Muhim: hozirgi konfiguratsiya diplom himoyasi uchun SQLite demo deploy qiladi. Render free service filesystemi doimiy saqlanmaydi, shuning uchun start paytida migration va seed avtomatik ishlaydi. Production uchun Render PostgreSQLga o‘tkazish tavsiya etiladi.

Build Command:

```bash
npm install && npx prisma generate && npm run build
```

Start Command:

```bash
npm start
```

Render Environment Variables:

```text
DATABASE_URL=file:./dev.db
AUTH_SECRET=Render avtomatik generate qiladi
NODE_ENV=production
```
