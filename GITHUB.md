# Добавить проект на GitHub

## Способ 1: Через браузер (без терминала)

1. Зайди на **https://github.com/new**
2. Название: `champion`
3. Выбери **Public**
4. Нажми **Create repository**
5. На странице репозитория нажми **"uploading an existing file"** (или перетащи файлы в область)
6. Перетащи в окно **все файлы** из папки «сайт чемпиона»:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `DEPLOY.md`
   - `.gitignore`
7. Нажми **Commit changes**

Готово!

---

## Способ 2: Через терминал

Если репозиторий уже создан на GitHub:

1. Открой **Терминал** (Cmd+Space → «Терминал»)
2. Вставь и выполни по одной строке (замени `ТВОЙ_USERNAME` на свой логин GitHub):

```bash
cd "/Users/tqerty/Desktop/сайт чемпиона"
git remote add origin https://github.com/ТВОЙ_USERNAME/champion.git
git push -u origin main
```

При `git push` может попросить войти в GitHub — введи логин и пароль (или токен).
