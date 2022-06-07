import {PerfumePrice} from "../../types/types";

export const perfumer: Array<{ name: string }> = [
    {"name": "Burberry"},
    {"name": "Bvlgari"},
    {"name": "Calvin Klein"},
    {"name": "Carolina Herrera"},
    {"name": "Chanel"},
    {"name": "Creed"},
    {"name": "Dior"},
    {"name": "Dolce&Gabbana"},
    {"name": "Giorgio Armani"},
    {"name": "Gucci"},
    {"name": "Hermes"},
    {"name": "Hugo Boss"},
    {"name": "Jean Paul Gaultier"},
    {"name": "Lancome"},
    {"name": "Paco Rabanne"},
    {"name": "Prada"},
    {"name": "Tom Ford"},
    {"name": "Versace"},
];

export const gender: Array<{ name: string }> = [
    {"name": "Nam"},
    {"name": "Nữ"},
];

export const price: Array<PerfumePrice> = [
    {"id": 1, "name": "Tất cả", "array": []},
    {"id": 2, "name": "100.000 - 1.000.000 VND", "array": [100000, 1000000]},
    {"id": 3, "name": "1.000.000 - 2.000.000 VND", "array": [1000000, 2000000]},
    {"id": 4, "name": "2.000.000 - 5.000.000 VND", "array": [2000000, 5000000]},
    {"id": 5, "name": "Trên 5.000.000", "array": [500000, 100000000]}
];
