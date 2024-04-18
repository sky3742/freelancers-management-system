import { User } from "../model/user";

export const users: User[] = [
	{
		createdAt: "2024-04-18T08:02:36.011Z",
		username: "Magali_Dach9",
		mail: "Ariel.Legros56@yahoo.com",
		phoneNumber: "1-308-230-3801",
		skillsets: "navigating",
		hobby: "Bedfordshire",
		updatedAt: "2024-04-17T21:22:31.536Z",
		id: "1"
	},
	{
		createdAt: "2024-04-18T11:49:55.265Z",
		username: "Caterina59",
		mail: "Freddy53@gmail.com",
		phoneNumber: "1-202-234-2767 x0047",
		skillsets: "redefine",
		hobby: "Fresh",
		updatedAt: "2024-04-18T13:24:59.995Z",
		id: "2"
	},
	{
		createdAt: "2024-04-18T04:57:29.554Z",
		username: "Michele_Feil",
		mail: "Serena61@hotmail.com",
		phoneNumber: "(827) 953-9232",
		skillsets: "North",
		hobby: "Radium",
		updatedAt: "2024-04-18T14:00:57.839Z",
		id: "3"
	},
	{
		createdAt: "2024-04-17T19:28:28.270Z",
		username: "Scottie.Abbott",
		mail: "Jaylin26@gmail.com",
		phoneNumber: "(734) 519-1200 x7909",
		skillsets: "fugit",
		hobby: "Cotton",
		updatedAt: "2024-04-18T12:30:49.437Z",
		id: "4"
	},
	{
		createdAt: "2024-04-17T23:54:29.790Z",
		username: "Roma55",
		mail: "Ari.Hegmann87@hotmail.com",
		phoneNumber: "1-201-451-8292 x3511",
		skillsets: "programming",
		hobby: "geez",
		updatedAt: "2024-04-18T10:06:12.205Z",
		id: "5"
	},
	{
		createdAt: "2024-04-17T19:02:41.351Z",
		username: "Katelyn_Bernier",
		mail: "Nestor.Cormier46@gmail.com",
		phoneNumber: "604-321-2922 x210",
		skillsets: "expedite",
		hobby: "Massachusetts",
		updatedAt: "2024-04-18T04:25:46.231Z",
		id: "6"
	},
	{
		createdAt: "2024-04-17T16:49:21.940Z",
		username: "Elvera75",
		mail: "Adelle.Frami6@yahoo.com",
		phoneNumber: "335-830-5866 x29161",
		skillsets: "except",
		hobby: "Loti",
		updatedAt: "2024-04-18T03:34:43.929Z",
		id: "7"
	},
	{
		createdAt: "2024-04-17T22:11:59.466Z",
		username: "Erica_Schiller",
		mail: "Ali_Breitenberg@gmail.com",
		phoneNumber: "980-261-7440 x073",
		skillsets: "gloss",
		hobby: "Liaison",
		updatedAt: "2024-04-18T15:19:19.419Z",
		id: "8"
	},
	{
		createdAt: "2024-04-18T13:09:47.779Z",
		username: "Kip95",
		mail: "Verner1@hotmail.com",
		phoneNumber: "680.795.7255",
		skillsets: "thrust",
		hobby: "zowie",
		updatedAt: "2024-04-18T14:07:56.496Z",
		id: "9"
	},
	{
		createdAt: "2024-04-18T04:34:28.485Z",
		username: "Bethel2",
		mail: "Khalid.Towne45@gmail.com",
		phoneNumber: "758.254.5559 x810",
		skillsets: "South",
		hobby: "structure",
		updatedAt: "2024-04-18T05:59:36.270Z",
		id: "10"
	},
	{
		createdAt: "2024-04-18T14:24:21.641Z",
		username: "Hilda.Langosh49",
		mail: "Agustin_Price@yahoo.com",
		phoneNumber: "522.768.1333 x9165",
		skillsets: "Creative",
		hobby: "aggregate",
		updatedAt: "2024-04-18T00:30:09.064Z",
		id: "11"
	},
	{
		createdAt: "2024-04-18T05:22:52.084Z",
		username: "Judd_Schaefer",
		mail: "Antonetta3@gmail.com",
		phoneNumber: "(335) 303-6932 x83643",
		skillsets: "peripheral",
		hobby: "Creative",
		updatedAt: "2024-04-17T23:26:55.682Z",
		id: "12"
	}
].map((user) => ({
	...user,
	createdAt: new Date(user.createdAt),
	updatedAt: new Date(user.updatedAt)
}));
