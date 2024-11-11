import React from "react";

function ParseContentData(data) {
    return Object.keys(data).map(key => {
        return {
            id: key,    // key'i id olarak ata
            ...data[key] // hangi key'e denk geliyorsa o datayı çıkar
        }
    })
    .sort(function (a, b) {
        const dateA = new Date(a.date);  // Tarih string'ini Date objesine çevir
        const dateB = new Date(b.date);  // Tarih string'ini Date objesine çevir
        return dateB - dateA;            // Zamanı en yeni olanı önce alacak şekilde sıralar
    });
}

export default ParseContentData;
