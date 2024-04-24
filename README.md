
# Setup
Clone the repository and install dependencies.
```bash
git clone https://github.com/MPD12340/Blog-App.git
```
```bash
cd Blog-App
```
# For Backend

```bash
cd backend 
```
It is always good to setup virtual environment to avoid version collision.
```bash
python -m venv myenv
myenv\Scripts\activate
cd ..
```
```bash
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver

```
# For Frontend
```bash
cd frontend
```
```bash
npm install
```
Start the client
```bash
npm run dev
```
