# 🔎 Personal profile web-page source code Repository
🌐 서비스 주소: https://www.dongjun.me

## 💻 프로젝트 소개
개인 프로필 페이지입니다.

## 🔧 주요기능
- [x] Contacts 링크 모음
- [ ] Projects 링크 모음

## 🔨 Dev Guide
### ⚙ Dev Environment
- `react: 18.3.1`
- `typescript: 4.9.5`
- **Infra Structure**: AWS S3 with CDN (managed by Terraform)
- **CI/CD**: CI/CD with `github actions`

### Init Project
1. Install npm dependencies `npm ci`
2. Run project Dev mode `npm start`

### Deploy Project
1. Check build is successful `npm run build`
2. Add `AWS_ACCESS_KEY` in github secrets
3. Push main branch

### 📁 Directory Structure
```bash
# cd src && tree
├─assets
│  └─static # static data by JSON[] format
├─components
│  ├─hearder
│  └─logo
├─pages
├─styles
└─types
```