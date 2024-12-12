// src/mockData.js
const roles = [
    {
        "`id`": "3",
        "`name`": "ADMIN"
    },
    {
        "`id`": "2",
        "`name`": "ORGANIZER"
    },
    {
        "`id`": "1",
        "`name`": "USER"
    }
];

const users = [
    {
        "`id`": "1",
        "`uuid`": "a731e560-a679-11ef-a699-7c8ae1934084",
        "`username`": "user1",
        "`password`": "$2a$10$DuXtu7C8b6wTgc2xsU8Ubem7BaX3mdB3d0Fmtez60Y3GCmnMS4z3e",
        "`email`": "user1@example.com",
        "`fullname`": "User One",
        "`tel`": "1234567890",
        "`address`": "Address 1",
        "`role_id`": "1"
    },
    {
        "`id`": "2",
        "`uuid`": "a731ef83-a679-11ef-a699-7c8ae1934084",
        "`username`": "user2",
        "`password`": "$2a$10$Eo1cj75xEJ4YgkhkYo5BnOQSyScAag4QLeT87gAEoMYEV325S3jia",
        "`email`": "user2@example.com",
        "`fullname`": "User Two",
        "`tel`": "1234567891",
        "`address`": "Address 2",
        "`role_id`": "1"
    },
    {
        "`id`": "3",
        "`uuid`": "a731f030-a679-11ef-a699-7c8ae1934084",
        "`username`": "organizer1",
        "`password`": "$2a$10$MnFqe2nhoG1L7aHWocUyQe.LmCu1t7LRJHrq.LbaV11f9g9t/J0Lq",
        "`email`": "organizer1@example.com",
        "`fullname`": "Organizer One",
        "`tel`": "1234567892",
        "`address`": "Address 3",
        "`role_id`": "2"
    },
    {
        "`id`": "4",
        "`uuid`": "a731f091-a679-11ef-a699-7c8ae1934084",
        "`username`": "admin1",
        "`password`": "$2a$10$xQWf2O7kTNaHncHVUAAjlu6SCQYL4iSGtN0T/ANgYofRUWetsoUAC",
        "`email`": "admin1@example.com",
        "`fullname`": "Admin One",
        "`tel`": "1234567893",
        "`address`": "Address 4",
        "`role_id`": "3"
    },
    {
        "`id`": "5",
        "`uuid`": "a731f0d8-a679-11ef-a699-7c8ae1934084",
        "`username`": "admin2",
        "`password`": "$2a$10$5BS4Ma1uCuOuLYnOT0RgOOPHKXVPHhnG2WAL6Pu8p1R.sR7/fgtry",
        "`email`": "admin2@example.com",
        "`fullname`": "Admin Two",
        "`tel`": "1234567894",
        "`address`": "Address 5",
        "`role_id`": "3"
    },
    {
        "`id`": "10",
        "`uuid`": "eb7dc99d-3310-494b-a286-e3126e854a01",
        "`username`": "newUser1",
        "`password`": "$2a$10$iygQMiymrPdLV3uAF8X.7eUbH9pxq4TaQZ0wtIXcmMBtm2KOm3qui",
        "`email`": "newuser1@gmail.com",
        "`fullname`": "John ching chong",
        "`tel`": "1234567890",
        "`address`": "321 Main Street",
        "`role_id`": "1"
    },
    {
        "`id`": "11",
        "`uuid`": "9e0191c9-7658-4fa8-b2ee-a842b7995e2a",
        "`username`": "organizerTest",
        "`password`": "$2a$10$/HLD6L77C1zTr8nmTgb3rOYDDIIRj8770sMQwu/5GLTMyHR6MDrP.",
        "`email`": "organizertest@mail.com",
        "`fullname`": "Test Organizer",
        "`tel`": "0506167899",
        "`address`": "Random address",
        "`role_id`": "2"
    },
    {
        "`id`": "12",
        "`uuid`": "e4feeafc-c491-4a0b-8c37-ca4f340ad7c9",
        "`username`": "testUser",
        "`password`": "$2a$10$C8O/LVAYD45pPpmCADx2d.J5HMveX/osncHDBgW/BEamAxkVpyJJu",
        "`email`": "test_user@gmail.com",
        "`fullname`": "test user full name",
        "`tel`": "1122334455",
        "`address`": "321 sub Street",
        "`role_id`": "1"
    }
];

const categories = [
    {
        "`id`": "1",
        "`name`": "Music"
    },
    {
        "`id`": "2",
        "`name`": "Sports"
    },
    {
        "`id`": "3",
        "`name`": "Conference"
    },
    {
        "`id`": "4",
        "`name`": "Workshop"
    },
    {
        "`id`": "5",
        "`name`": "Theater"
    }
];

const events = [
    {
        "`id`": "3",
        "`uuid`": "aecc2d5f-a679-11ef-a699-7c8ae1934084",
        "`name`": "Tech Conference",
        "`time_start`": "2024-11-25 09:00:00",
        "`time_end`": "2024-11-25 17:00:00",
        "`place`": "Convention Center",
        "`organizer_id`": "3",
        "`description`": "Annual tech gathering.",
        "`max_quantity`": "300",
        "`is_public`": "1",
        "`category_id`": "3"
    },
    {
        "`id`": "4",
        "`uuid`": "aecc2db4-a679-11ef-a699-7c8ae1934084",
        "`name`": "Cooking Workshop",
        "`time_start`": "2024-12-10 14:00:00",
        "`time_end`": "2024-12-10 17:00:00",
        "`place`": "Culinary Studio",
        "`organizer_id`": "3",
        "`description`": "Learn to cook like a pro.",
        "`max_quantity`": "50",
        "`is_public`": "1",
        "`category_id`": "4"
    },
    {
        "`id`": "5",
        "`uuid`": "aecc2dfe-a679-11ef-a699-7c8ae1934084",
        "`name`": "Drama Play",
        "`time_start`": "2024-12-15 19:00:00",
        "`time_end`": "2024-12-15 21:00:00",
        "`place`": "Theater Hall",
        "`organizer_id`": "3",
        "`description`": "A classic drama performance.",
        "`max_quantity`": "200",
        "`is_public`": "1",
        "`category_id`": "5"
    },
    {
        "`id`": "6",
        "`uuid`": "11111111-a111-11ef-b111-1a1a11111111",
        "`name`": "Music Festival",
        "`time_start`": "2024-12-10 18:00:00",
        "`time_end`": "2024-12-10 23:00:00",
        "`place`": "Open Air Park",
        "`organizer_id`": "11",
        "`description`": "An exciting music festival with live performances.",
        "`max_quantity`": "1000",
        "`is_public`": "1",
        "`category_id`": "1"
    },
    {
        "`id`": "7",
        "`uuid`": "22222222-a222-11ef-b222-2a2a22222222",
        "`name`": "Tech Conference",
        "`time_start`": "2024-12-12 09:00:00",
        "`time_end`": "2024-12-12 17:00:00",
        "`place`": "Tech Convention Center",
        "`organizer_id`": "11",
        "`description`": "A day-long conference for tech enthusiasts.",
        "`max_quantity`": "500",
        "`is_public`": "1",
        "`category_id`": "2"
    },
    {
        "`id`": "8",
        "`uuid`": "33333333-a333-11ef-b333-3a3a33333333",
        "`name`": "Art Exhibition",
        "`time_start`": "2024-12-15 10:00:00",
        "`time_end`": "2024-12-20 20:00:00",
        "`place`": "City Gallery",
        "`organizer_id`": "11",
        "`description`": "An exhibition featuring contemporary art.",
        "`max_quantity`": "300",
        "`is_public`": "0",
        "`category_id`": "3"
    },
    {
        "`id`": "9",
        "`uuid`": "44444444-a444-11ef-b444-4a4a44444444",
        "`name`": "Food Carnival",
        "`time_start`": "2024-12-18 11:00:00",
        "`time_end`": "2024-12-18 23:00:00",
        "`place`": "Central Plaza",
        "`organizer_id`": "11",
        "`description`": "A carnival featuring cuisines from around the world.",
        "`max_quantity`": "800",
        "`is_public`": "1",
        "`category_id`": "4"
    },
    {
        "`id`": "10",
        "`uuid`": "55555555-a555-11ef-b555-5a5a55555555",
        "`name`": "Book Fair",
        "`time_start`": "2024-12-20 09:00:00",
        "`time_end`": "2024-12-20 18:00:00",
        "`place`": "City Library",
        "`organizer_id`": "11",
        "`description`": "A fair showcasing the latest books and authors.",
        "`max_quantity`": "600",
        "`is_public`": "0",
        "`category_id`": "5"
    },
    {
        "`id`": "11",
        "`uuid`": "66666666-a666-11ef-b666-6a6a66666666",
        "`name`": "Exclusive Music Night",
        "`time_start`": "2024-12-22 19:00:00",
        "`time_end`": "2024-12-22 23:00:00",
        "`place`": "Private Club A",
        "`organizer_id`": "11",
        "`description`": "A private music night for invited guests.",
        "`max_quantity`": "200",
        "`is_public`": "0",
        "`category_id`": "1"
    },
    {
        "`id`": "12",
        "`uuid`": "77777777-a777-11ef-b777-7a7a77777777",
        "`name`": "VIP Tech Roundtable",
        "`time_start`": "2024-12-24 10:00:00",
        "`time_end`": "2024-12-24 14:00:00",
        "`place`": "Tech Innovation Hub",
        "`organizer_id`": "11",
        "`description`": "An exclusive roundtable discussion for tech leaders.",
        "`max_quantity`": "50",
        "`is_public`": "0",
        "`category_id`": "2"
    },
    {
        "`id`": "13",
        "`uuid`": "88888888-a888-11ef-b888-8a8a88888888",
        "`name`": "Collectors Art Preview",
        "`time_start`": "2024-12-26 17:00:00",
        "`time_end`": "2024-12-26 20:00:00",
        "`place`": "Private Art Studio",
        "`organizer_id`": "11",
        "`description`": "A special preview of rare artworks for collectors.",
        "`max_quantity`": "30",
        "`is_public`": "0",
        "`category_id`": "3"
    },
    {
        "`id`": "14",
        "`uuid`": "99999999-a999-11ef-b999-9a9a99999999",
        "`name`": "Gourmet Tasting",
        "`time_start`": "2024-12-28 18:00:00",
        "`time_end`": "2024-12-28 21:00:00",
        "`place`": "Luxury Hotel Ballroom",
        "`organizer_id`": "11",
        "`description`": "A private tasting event for culinary enthusiasts.",
        "`max_quantity`": "100",
        "`is_public`": "0",
        "`category_id`": "4"
    },
    {
        "`id`": "15",
        "`uuid`": "aaaaaaaa-abcd-11ef-baaa-aaaabbbbcccc",
        "`name`": "Private Author Meet",
        "`time_start`": "2024-12-30 15:00:00",
        "`time_end`": "2024-12-30 18:00:00",
        "`place`": "Exclusive Library Lounge",
        "`organizer_id`": "11",
        "`description`": "An intimate gathering with a famous author.",
        "`max_quantity`": "40",
        "`is_public`": "0",
        "`category_id`": "5"
    },
    {
        "`id`": "16",
        "`uuid`": "a87b6bd4-b38c-41d3-b3de-4b23485e15ba",
        "`name`": "Tech Meetup",
        "`time_start`": "2024-12-01 10:00:00",
        "`time_end`": "2024-12-01 14:00:00",
        "`place`": "123 Tech Park",
        "`organizer_id`": "4",
        "`description`": "A meetup for tech enthusiasts.",
        "`max_quantity`": "100",
        "`is_public`": "1",
        "`category_id`": "1"
    },
    {
        "`id`": "17",
        "`uuid`": "2eccb949-91de-4a0e-89eb-11f7c1117fce",
        "`name`": "Tech Meetup test",
        "`time_start`": "2024-12-01 10:00:00",
        "`time_end`": "2024-12-01 14:00:00",
        "`place`": "123 Tech Park",
        "`organizer_id`": "11",
        "`description`": "A meetup for tech enthusiasts.",
        "`max_quantity`": "200",
        "`is_public`": "1",
        "`category_id`": "2"
    }
];

const media = [
    {
        "`id`": "3",
        "`event_id`": "3",
        "`url`": "https://example.com/media/tech_conference_video.mp4",
        "`type`": "video"
    },
    {
        "`id`": "4",
        "`event_id`": "4",
        "`url`": "https://example.com/media/cooking_workshop_image.jpg",
        "`type`": "image"
    },
    {
        "`id`": "5",
        "`event_id`": "5",
        "`url`": "https://example.com/media/drama_play_image.jpg",
        "`type`": "image"
    }
];

const tickets = [
    {
        "`id`": "4",
        "`info_id`": "4",
        "`event_id`": "3"
    },
    {
        "`id`": "5",
        "`info_id`": "5",
        "`event_id`": "4"
    }
];

const ticket_info = [
    {
        "`id`": "1",
        "`ticket_code`": "TICKET1",
        "`ticket_name`": "VIP Seat",
        "`ticket_type`": "VIP",
        "`ticket_position`": "Front Row",
        "`max_quantity`": "50",
        "`price`": "100"
    },
    {
        "`id`": "2",
        "`ticket_code`": "TICKET2",
        "`ticket_name`": "Regular Seat",
        "`ticket_type`": "Regular",
        "`ticket_position`": "Middle Row",
        "`max_quantity`": "150",
        "`price`": "50"
    },
    {
        "`id`": "3",
        "`ticket_code`": "TICKET3",
        "`ticket_name`": "Economy Seat",
        "`ticket_type`": "Economy",
        "`ticket_position`": "Back Row",
        "`max_quantity`": "300",
        "`price`": "30"
    },
    {
        "`id`": "4",
        "`ticket_code`": "TICKET4",
        "`ticket_name`": "Standing",
        "`ticket_type`": "General Admission",
        "`ticket_position`": "Standing Area",
        "`max_quantity`": "500",
        "`price`": "20"
    },
    {
        "`id`": "5",
        "`ticket_code`": "TICKET5",
        "`ticket_name`": "Premium Box",
        "`ticket_type`": "VIP",
        "`ticket_position`": "Box Section",
        "`max_quantity`": "20",
        "`price`": "200"
    }
];

const reservation = [
    {
        "`id`": "4",
        "`uuid`": "b78d1404-a679-11ef-a699-7c8ae1934084",
        "`user_id`": "4",
        "`ticket_id`": "4",
        "`quantity`": "1",
        "`reservation_date`": "2024-11-18 06:00:00",
        "`is_used`": "0"
    },
    {
        "`id`": "5",
        "`uuid`": "b78d1444-a679-11ef-a699-7c8ae1934084",
        "`user_id`": "5",
        "`ticket_id`": "5",
        "`quantity`": "2",
        "`reservation_date`": "2024-11-18 07:00:00",
        "`is_used`": "0"
    },
    {
        "`id`": "8",
        "`uuid`": "3ad17ea6-8d4e-4511-9c5b-f394da7fa0d8",
        "`user_id`": "12",
        "`ticket_id`": "5",
        "`quantity`": "3",
        "`reservation_date`": "2024-12-07 12:18:44",
        "`is_used`": "0"
    }
]




export const MockProduct = {
    id: 1,
    attributes: {
        title: "Stylish T-Shirt",
        price: 29.99,
        desc: "A stylish t-shirt made with high quality fabric.",
        description: "A fantasic show to see how to JustinBieber cook the show",
        img: {
            data: {
                attributes: {
                    url: "https://via.placeholder.com/500"
                }
            }
        },
        img2: {
            data: {
                attributes: {
                    url: "https://via.placeholder.com/500?text=Image2"
                }
            }
        },
        img3: {
            data: {
                attributes: {
                    url: "https://via.placeholder.com/500?text=Image3"
                }
            }
        }
    }
};
