# Как выложить сайт Чемпион

## Вариант 1: Vercel (рекомендуется)

1. Зайди на **https://vercel.com** и войди (можно через GitHub)
2. Нажми **Add New** → **Project**
3. Импортируй репозиторий с GitHub (если проект уже там)  
   **ИЛИ** перетащи папку проекта на https://vercel.com/new
4. Нажми **Deploy** — готово!
5. Ссылка будет вида `https://твой-проект.vercel.app`

**Через терминал:**
```bash
cd "/Users/tqerty/Desktop/сайт чемпиона"
npx vercel
```
Следуй подсказкам, войди в аккаунт — получишь ссылку.

---

## Вариант 2: GitHub Pages

1. Залей проект на GitHub (см. GITHUB.md)
2. Зайди в репозиторий → **Settings** → **Pages**
3. В **Source** выбери **Deploy from a branch**
4. Ветка: **main**, папка: **/ (root)**
5. Сохрани — через минуту сайт будет на `https://ТВОЙ_USERNAME.github.io/champion`

---

## Вариант 3: Netlify Drop

1. Открой **https://app.netlify.com/drop**
2. Перетащи папку проекта в окно браузера
3. Получишь ссылку `https://random-name.netlify.app`

---

## Автодеплой (при каждом push)

**Vercel:** Подключи GitHub-репозиторий — каждый `git push` будет автоматически обновлять сайт.

**Netlify:** Аналогично — Import from Git, выбери репозиторий.
