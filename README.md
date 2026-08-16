<div align="center"><h2>Task Backend Projesi</h2></div>

NodeJS ve Express kullanılarak yapılmış çalışanlarınız için görevler oluşturup atayabileceğiniz bir rest api uygulamasıdır.

`
Kayıt edilen verilen localde tutulmaktadır. Sunucuyu tekrar başlatmak bu verilerin kaybolmasına yol açacaktır.
`

#### Özellikler

- Kitap ekleme
- Kitapları görüntüleme
- Kitap silme
- Kitap güncelleme
- Kitap kayıtlarının localStorage ile saklanması

#### Ön gereksinimler
- Node.js
- Npm
#### Kullanım
```
    npm install
    npm run start
    (nodemon kurulu ise)
    npm run dev
```

#### Proje Yapısı

```
/
├── middleware/
│   └── logger.js             # Loglama sağlayıcısı
├── controllers/
│   └── taskController.js     # Görevler için ilgili fonksiyonlar
├── routes/
│   └── taskRoutes.js         # Görevler için ilgili endpointler
└── app.js                    # Uygulamanın başlangıç dosyası
```

#### API Base Url
`
http://localhost:3000/api
`
#### Endpointler
##### Görev ekleme
* POST `/api/createTask`
* Body(JSON)
```json
{
  "taskTitle": "Örnek Görev",
  "taskDesc": "Görev açıklaması",
  "assignedEmployee": "Ali",
  "priority": 1,
  "status": "pending"
}
```
* Başarılı `201`

#### Görevleri Listeleme
* GET `/api/tasks`
* Başarılı `200` | Tüm Görevler
* Başarısız `404` | Bulunamadı

#### Görev Detayı
* GET `/api/task/:id`
  * id - Gerekli
* Başarılı `200` | İlgili görev
* Başarısız `404` | Bulunamadı

#### Görev Güncelleme
* PUT `/api/task/:id`
  * id - Gerekli
* Body(JSON)
```json
{
  "newTitle": "Yeni Başlık",
  "newDesc": "Yeni Açıklama",
  "newEmployee": "Veli",
  "newPriority": 2
}
```
* Başarılı `200` | İlgili düzenlenmiş görev
* Başarısız `404` | Bulunamadı

#### Görev Önceliğini Güncelleme
* PATCH `/api/task/:id`
  * id - Gerekli
* Body(JSON)
```json
{
  "newPriority": "Low",
}
```
* Başarılı `200` | İlgili düzenlenmiş görev
* Başarısız `404` | Bulunamadı

#### Görev Silme
* DELETE `/api/task/:id`
  * id - Gerekli
* Başarılı `204`
* Başarısız `404` | Bulunamadı
