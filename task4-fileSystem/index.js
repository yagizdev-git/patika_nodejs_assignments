const fs = require('fs');

// JSON DOSYASINI OLUŞTURMA VE İLK VERİYİ YAZMA
fs.writeFile('task4-fileSystem/employees.json', '{"name": "Employee 1 Yağız", "salary": 2000}', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('\n----------------------------');
    console.log('Dosya başarıyla oluşturuldu!');
    console.log('----------------------------\n');
    // JSON DOSYASINI OKUMA VE KONSOLA YAZDIRMA
    fs.readFile('task4-fileSystem/employees.json', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`employees.json dosya verisi:\n${data}\n`);
      }
    });
  }
});

// VERİYİ GÜNCELLEME VE EKRANA YAZDIRMA 
setTimeout( ()=>{
  fs.writeFile('task4-fileSystem/employees.json', '{"name": " New Employee Mehmet", "salary": 5500}', (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('\n----------------------------');
      console.log('Dosya başarıyla güncellendi!');
      console.log('----------------------------\n');
      fs.readFile('task4-fileSystem/employees.json', (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`employees.json dosya verisi:\n${data}\n`);
        }
      });
    }
  });
}, 3000);

// DOSYAYI SİLME
setTimeout( ()=>{
  fs.unlink('task4-fileSystem/employees.json', (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('\n----------------------------');
      console.log('Dosya silindi!');
      console.log('----------------------------\n');
    }
  });
}, 6000);