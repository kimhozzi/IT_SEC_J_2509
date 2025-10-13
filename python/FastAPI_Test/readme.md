py -3.10 -m pip install uv #uv 설치

py -3.10 -m uv venv venv #가상환경 만들기

.\venv\Scripts\Activate.ps1

-- > UVICORN 설치

재실행 시 .\venv\Scripts\Activate.ps1 이 코드만 터미널에 붙여 재활성화

uv pip install -r requirements.txt
