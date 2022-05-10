import React from 'react';
let state = {
	profilePage: {
		posts: [
			{ id: "1", text: "Мать твою ебал", likesCount: "86" },
			{ id: "2", text: "Соси хуй", likesCount: "21" },
		],
		newPostElement: React.createRef()
	},
	dialogsPage: {
		dialogs: [
			[
				{
					name: "Robot",
					text: "There is fucking nothing here",
					url: "https://avt-28.foto.mail.ru/mail/si3pio/_avatar180?"
				}
			],
			[
				{
					name: "Andrew",
					text: "hi, can u fuck me?",
					url: "https://ic.pics.livejournal.com/sladkowa/66239508/755305/755305_900.jpg"
				},
				{
					name: "Me",
					text: "ok",
					url: "https://cdn.fishki.net/upload/post/2016/11/19/2140537/57e499b00d825c1a89bfaaf5b4d6df72.jpg"
				},
			],
			[],
			[],
			[
				{
					name: "Vasya",
					text: "FUCK YOUR LIFE!!!",
					url: "https://avatars.mds.yandex.net/get-zen_doc/1595998/pub_5e38119a7ce6786735062737_5e3811a57749463424e32a25/scale_1200"
				},
				{
					name: "Me",
					text: "I'll kill u, stupid poor bastard",
					url: "https://cdn.fishki.net/upload/post/2016/11/19/2140537/57e499b00d825c1a89bfaaf5b4d6df72.jpg"
				},
				{
					name: "Me",
					text: "I said all.",
					url: "https://cdn.fishki.net/upload/post/2016/11/19/2140537/57e499b00d825c1a89bfaaf5b4d6df72.jpg"
				},
			],
		],
		freiends: [
			{ id: "1", name: "Andrew" },
			{ id: "2", name: "Dmitry" },
			{ id: "3", name: "Sasha" },
			{ id: "4", name: "Vasya" },
			{ id: "5", name: "Valera" },
			{ id: "6", name: "Viktor" },
			{ id: "7", name: "This is a list item" },
			{ id: "8", name: "Another a list item" },
			{ id: "9", name: "This is a list item" },
			{ id: "10", name: "Fuck! Another list item" }
		]
	},
}


export default state;