# Jol qaǵıydaların úyreniw platforması

Diplom teması: **“Kompyuter grafikasidan foydalanib yo‘l harakati qoidalarini o‘rgatuvchi platforma ishlab chiqish”**.

Bul platforma kompyuter grafikası járdeminde jol háreketi qaǵıydaların úyreniwge arnalǵan sanlı oqıw ortalıǵı. Paydalanıwshılar video sabaqlar, jol belgileri katalogı, matnli sabaqlar, test moduli hám kabinet arqalı qáwipsiz háreket mádeniyatın qáliplestiredi.

## Texnologiyalar

- Next.js App Router, TypeScript, React
- Tailwind CSS hám komponentlik interfeys
- Prisma ORM hám SQLite lokal maǵlıwmatlar bazası
- Zod validaciyası, bcryptjs hám cookie/session autentifikaciyası
- YouTube iframe video sabaqları hám SVG jol belgileri
- Recharts, Lucide React, Framer Motion

## Tiykarǵı modullar

- **Video sabaqlar**: `/videos`, `/videos/[id]`, responsive iframe player, kategoriya boyınsha filtrlew, izlew hám kórildi dep belgilew.
- **Jol belgileri katalogı**: `/signs`, `/signs/[id]`, SVG belgiler, belginiń mánisi hám qollanılıw ornı.
- **Test moduli**: `/quiz`, 10 soraw, 4 juwap variantı, túsindirme hám nátiyjeni maǵlıwmatlar bazasına saqlaw.
- **Kabinet hám nátiyjeler**: `/dashboard`, `/results`, video ilgerilewi, test statistikası hám grafikalar.
- **Admin panel**: `/admin`, `/admin/videos`, `/admin/lessons`, `/admin/signs`, `/admin/questions`, `/admin/users`.

## Maǵlıwmatlar bazası

Prisma modelleri: `User`, `Lesson`, `VideoLesson`, `VideoProgress`, `RoadSign`, `QuizQuestion`, `QuizResult`, `LessonProgress`.

Seed quramı:

- 6 matnli sabaq
- 12 YouTube video sabaq
- 25 jol belgisi
- 40 test sorawı
- 1 admin paydalanıwshı
- 2 ápiwayı demo paydalanıwshı

## Iske túsiriw

```bash
npm install
npx prisma migrate deploy
npm run seed
npm run dev
```

Lokal mánzil:

```text
http://localhost:10000
```

Demo admin:

```text
admin@example.com
admin12345
```

## Render deploy

`render.yaml` faylı Render arqalı deploy etiw ushın tayarlanǵan:

- Servis túri: `web`
- Runtime: `node`
- Plan: `free`
- Qurıw buyrıǵı: `npm ci --include=dev && npx prisma generate && npm run build`
- Iske túsiriw buyrıǵı: `npx prisma migrate deploy && npm run seed && npm start`

Render kabineti arqalı ulaw:

1. Joybardı GitHub repositoryge júkleń.
2. Render saytında **New +** túymesin basıń.
3. **Blueprint** tańlań.
4. GitHub repositorydi ulań.
5. Render `render.yaml` faylın avtomatik oqıydı.
6. Deploy tamamlanǵannan keyin berilgen `onrender.com` siltemesi arqalı platformanı ashıń.

Esletpe: házirgi konfiguraciya diplom kórsetiw ushın SQLite demo deploy etedi. Render free service filesystemi turaqlı saqlanbaydı, sonıń ushın start waqtında migration hám seed avtomatik isleydi. Turaqlı production ushın PostgreSQL maǵlıwmatlar bazasına ótiw usınıladı.

Environment Variables:

```text
DATABASE_URL=file:./dev.db
AUTH_SECRET=Render avtomatik jaratadı
NODE_ENV=production
```
