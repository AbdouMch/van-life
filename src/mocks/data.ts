import modestExplorer from "@/mocks/images/modest-explorer.png"
import beachBum from "@/mocks/images/beach-bum.png"
import reliableRed from "@/mocks/images/reliable-red.png"
import dreamFinder from "@/mocks/images/dreamfinder.png"
import theCruiser from "@/mocks/images/the-cruiser.png"
import greenWonder from "@/mocks/images/green-wonder.png"

import type { Van } from "@/shared/types/van"

export const users = [
    { id: "123", email: "b@b.com", password: "p1234" },
    { id: "456", email: "a@a.com", password: "p1234" },
]

export const vans: Van[] = [
    {
        id: "1",
        name: "Modest Explorer",
        price: 60,
        description:
            "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
        imageUrl: modestExplorer,
        type: "simple",
        hostId: "123",
    },
    {
        id: "2",
        name: "Beach Bum",
        price: 80,
        description:
            "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
        imageUrl: beachBum,
        type: "rugged",
        hostId: "123",
    },
    {
        id: "3",
        name: "Reliable Red",
        price: 100,
        description:
            "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
        imageUrl: reliableRed,
        type: "luxury",
        hostId: "456",
    },
    {
        id: "4",
        name: "Dreamfinder",
        price: 65,
        description:
            "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.",
        imageUrl: dreamFinder,
        type: "simple",
        hostId: "444",
    },
    {
        id: "5",
        name: "The Cruiser",
        price: 120,
        description:
            "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.",
        imageUrl: theCruiser,
        type: "luxury",
        hostId: "123",
    },
    {
        id: "6",
        name: "Green Wonder",
        price: 70,
        description:
            "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
        imageUrl: greenWonder,
        type: "rugged",
        hostId: "123",
    },
]
