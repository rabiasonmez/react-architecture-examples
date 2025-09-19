# React Architecture Examples

🚀 Bu repository, **React projelerinde klasörleme ve mimari yaklaşımları** göstermek için hazırlanmıştır.  
Tüm örnekler **Vite + TypeScript + TailwindCSS** ile çalışır durumda verilmiştir.  

---

## 📂 İçerik

Bu repo içinde aşağıdaki mimari yaklaşımlar örneklenmiştir:

---

### 1. Flat Structure
**Özellikleri:**
- Tüm dosyalar (`components`, `App.tsx`, `utils`, `styles`) tek seviyede `src/` altında bulunur.  
- En basit klasörleme yöntemidir.  

**Kullanım Amacı:**
- Küçük projeler, deneme uygulamaları veya prototipler.  
- Öğrenme aşamasında olanlar için idealdir.  

**Avantajları:**
- Hızlı başlangıç sağlar.  
- Dosya yapısı basittir.  

**Dezavantajları:**
- Proje büyüdükçe yönetmek zorlaşır.  

---

### 2. Layered Architecture
**Özellikleri:**
- Katmanlara ayrılmıştır: `components/`, `pages/`, `services/`, `hooks/`, `utils/`.  
- MVC’ye benzer bir mantıkla organize edilir.  

**Kullanım Amacı:**
- Orta büyüklükte projeler.  
- Dosyaların belirli rollerine göre ayrılması gerektiğinde.  

**Avantajları:**
- Kod okunabilirliği artar.  
- Geliştiriciler hangi dosyanın nereye ait olduğunu kolayca bulur.  

**Dezavantajları:**
- Çok fazla katman olduğunda karmaşık hale gelebilir.  
- Özellikler arası bağımlılık yönetimi zorlaşabilir.  

---

### 3. Feature-Based Architecture
**Özellikleri:**
- Kod, **özelliklere (feature)** göre gruplanır.  
- Örneğin: `features/products`, `features/cart`.  

**Kullanım Amacı:**
- Modülerlik gereken orta ve büyük ölçekli projeler.  
- Ekiplerin farklı özellikler üzerinde bağımsız çalışması istendiğinde.  

**Avantajları:**
- Her feature bağımsız geliştirilebilir ve test edilebilir.  
- Yeniden kullanılabilirlik artar.  

**Dezavantajları:**
- Çok küçük projelerde fazla karmaşık gelebilir.  

---

### 4. Atomic Design
**Özellikleri:**
- UI bileşenleri hiyerarşik olarak ayrılır:  
  - **Atoms** (Button, Input)  
  - **Molecules** (Form, Card)  
  - **Organisms** (Header, Footer)  
  - **Templates** (Sayfa düzenleri)  
  - **Pages** (Uygulamanın gerçek ekranları)  

**Kullanım Amacı:**
- Design system veya component library geliştirmek.  
- UI standardizasyonu gereken projeler.  

**Avantajları:**
- UI parçalarının tekrar kullanılabilirliği yüksektir.  
- Tasarım ekibi ile uyumlu çalışma sağlar.  

**Dezavantajları:**
- Başlangıçta biraz öğrenme eğrisi vardır.  
- Küçük projelerde gereksiz karmaşık gelebilir.  

---

### 5. Feature-Sliced Design (FSD)
**Özellikleri:**
- Modern ve ölçeklenebilir bir mimari.  
- Katmanlar:  
  - **app/** → uygulama ayarları, store, routing  
  - **pages/** → ekranlar  
  - **widgets/** → büyük UI parçaları  
  - **features/** → kullanıcıya değer katan özellikler (ör. login, add-to-cart)  
  - **entities/** → temel domain nesneleri (user, product)  
  - **shared/** → UI kütüphanesi, util fonksiyonlar, API client  

**Kullanım Amacı:**
- Büyük ölçekli, uzun süre geliştirilecek projeler.  
- Ekip halinde geliştirme ve bakım yapılacak projeler.  

**Avantajları:**
- Ölçeklenebilir ve sürdürülebilir.  
- Domain-driven design yaklaşımıyla uyumludur.  
- Açık ve standart bir yapı sunar.  

**Dezavantajları:**
- Küçük projelerde fazla karmaşık olabilir.  
- İlk başta öğrenmesi zaman alabilir.  

---

### 6. Monorepo (Yarn/NPM Workspaces)
**Özellikleri:**
- Bir repository içinde birden fazla paket/proje barındırır.  
- Örnek:  
  - `packages/web` → React uygulaması  
  - `packages/design-system` → Ortak UI kütüphanesi  

**Kullanım Amacı:**
- Büyük ekipler ve projelerde ortak kütüphane kullanımı.  
- Hem uygulama hem de kütüphaneleri tek repo içinde yönetmek.  

**Avantajları:**
- Tek repodan tüm projeleri yönetme kolaylığı.  
- Ortak kütüphaneler daha kolay paylaşılır.  

**Dezavantajları:**
- Repo yönetimi biraz daha karmaşık olabilir.  
- CI/CD süreçlerinde özel ayarlar gerekebilir.  

---

## 🛠 Kurulum ve Çalıştırma

Her proje bağımsızdır. Örnek:  

```bash
# Flat structure örneğini çalıştırmak için:
cd react-architecture-examples/flat-structure
npm install
npm run dev
