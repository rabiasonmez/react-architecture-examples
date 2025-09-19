# React Architecture Examples

🚀 Bu repository, **React projelerinde klasörleme ve mimari yaklaşımları** göstermek için hazırlanmıştır.  
Tüm örnekler **Vite + TypeScript + TailwindCSS** ile çalışır durumda verilmiştir.  

## 📂 İçerik

Bu repo içinde aşağıdaki mimari yaklaşımlar örneklenmiştir:

1. **Flat Structure**  
   - Basit ve küçük projeler için uygundur.  
   - Tüm component, sayfa, stil dosyaları `src/` altında yer alır.  

2. **Layered Architecture**  
   - `components/`, `pages/`, `services/`, `hooks/`, `utils/` gibi katmanlara ayrılmıştır.  
   - Orta büyüklükte projelerde tercih edilir.  

3. **Feature-Based Architecture**  
   - Kod, özellik bazlı (`features/products`, `features/cart`) dizinlerde organize edilmiştir.  
   - Büyük projelerde modülerlik sağlar.  

4. **Atomic Design**  
   - UI componentleri `atoms/`, `molecules/`, `organisms/`, `templates/` olarak ayrılır.  
   - Design system geliştirmek için uygundur.  

5. **Feature-Sliced Design (FSD)**  
   - Modern ve ölçeklenebilir bir mimaridir.  
   - `app/`, `pages/`, `widgets/`, `features/`, `entities/`, `shared/` katmanlarını içerir.  
   - Büyük ekip projelerinde önerilir.  

6. **Monorepo (Yarn Workspaces)**  
   - `packages/web` → React uygulaması  
   - `packages/design-system` → UI bileşenleri kütüphanesi  
   - Tek repository içinde birden fazla proje yönetimi sağlar.  

---

## 🛠 Kurulum ve Çalıştırma

Her proje bağımsızdır. Örnek:  

```bash
# Flat structure örneğini çalıştırmak için:
cd react-architecture-examples-complete/flat-structure
npm install
npm run dev
