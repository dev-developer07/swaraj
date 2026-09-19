import { prisma } from "./lib/db.js";

const doctorsData = [
	{
		name: "Dr Sujnanendra Mishra",
		specialization: "Obstetrics and Gynaecology",
		description: "Senior obstetrician and gynecologist who serves as the Chairman of Swaraj Hospital & Research Institute in Balangir, Odisha. A highly respected, veteran medical professional with over 41 years of experience in healthcare and administrative medicine within Odisha. Uniquely recognized both as an elite clinical expert and a top public health leader in Western Odisha.",
		email: "chairman.shri@outlook.com",
		experienceYears: 41,
		bookingFee: 500,
		profileImage: "/doctors/dr-sujnanendra-mishra.jpeg",
		schedules: [
			{ day: "Throughout the week", time: "11:30 am to 2:00 pm" },
			{ day: "Throughout the week", time: "7:00 pm to 9:00 pm" }
		]
	},
	{
		name: "Dr Bikramaditya Padhi",
		specialization: "Cardiology",
		description: "Highly regarded cardiologist, specializing in interventional cardiology and complex angioplasties. Holds a DM in Cardiology and runs his dedicated cardiac care clinic in Balangir, providing comprehensive non-invasive tests and heart treatments.",
		email: null,
		experienceYears: 15,
		bookingFee: 500,
		profileImage: "/doctors/dr-bikramaditya-padhi.jpeg",
		schedules: [
			{ day: "Friday & Saturday", time: "10:00 am to 2:00 pm" }
		]
	},
	{
		name: "Dr Rajat Bral",
		specialization: "General Medicine",
		description: "Consulting physician specializing in General Medicine. Completed MBBS from VIMSAR, Burla, Sambalpur, and MD in General Medicine from Acharya Shri Chander College of Medical Sciences (ASCOMS).",
		email: null,
		experienceYears: 12,
		bookingFee: 500,
		profileImage: "/doctors/dr-rajat-bral.jpeg",
		schedules: [
			{ day: "Throughout the week", time: "9:30 am to 1:00 pm" }
		]
	},
	{
		name: "Dr Swadhin Ku. Mishra",
		specialization: "Obstetrics and Gynaecology",
		description: "Leading consultant obstetrician and gynecologist based in Balangir, Odisha, who serves as a core management figure and senior specialist at Swaraj Hospital & Research Institute. Holds an MS in Obstetrics and Gynecology and is highly experienced in high-risk pregnancies, advanced surgeries, and complex maternal healthcare.",
		email: "managingdirector.shri@outlook.com",
		experienceYears: 18,
		bookingFee: 500,
		profileImage: "/doctors/dr-swadhin-ku-mishra.jpeg",
		schedules: [
			{ day: "Throughout the week", time: "11:00 am to 1:00 pm" },
			{ day: "Throughout the week", time: "5:00 pm to 9:00 pm" }
		]
	},
	{
		name: "Dr Manjulkanta Padhan",
		specialization: "General Surgery",
		description: "Experienced General Surgeon and Physician practicing in Balangir, Odisha. Holds MBBS and MS in General Surgery from VSS Medical College (VSSMC), Burla. Serves as Assistant Professor / Surgeon at Bhima Bhoi Medical College and Hospital and provides consultations at Swaraj Hospital.",
		email: null,
		experienceYears: 14,
		bookingFee: 500,
		profileImage: "/doctors/dr-manjulkanta-padhan.jpeg",
		schedules: [
			{ day: "Throughout the week", time: "5:00 pm to 7:00 pm" }
		]
	},
	{
		name: "Dr Sabyasachi Swain",
		specialization: "Orthopaedics",
		description: "Prominent Orthopaedic and Sports Medicine Surgeon practicing at Swaraj Hospital & Research Institute. Completed MBBS from VSS Medical College, Burla, Master's in Orthopaedic Surgery from MKCG Medical College, Berhampur, and senior residency in arthroscopic surgery at Safdarjung Hospital, New Delhi.",
		email: null,
		experienceYears: 15,
		bookingFee: 500,
		profileImage: "/doctors/dr-sabyasachi-swain.jpeg",
		schedules: [
			{ day: "Mon-Wed", time: "7:00 am to 9:00 am" },
			{ day: "Thu-Sat", time: "9:00 am to 12:00 pm" },
			{ day: "Everyday", time: "4:00 pm onwards" }
		]
	},
	{
		name: "Dr Somy Purohit",
		specialization: "Ophthalmology",
		description: "Ophthalmologist (eye specialist) practicing in Odisha, highly regarded for clinical and academic contributions to advanced eye care. Completed MS in Ophthalmology at VSS Medical College, Burla. Clinical imaging work featured in prestigious international medical journals like EYE and Ophthalmology.",
		email: null,
		experienceYears: 12,
		bookingFee: 500,
		profileImage: "/doctors/dr-somy-purohit.png",
		schedules: [
			{ day: "On Enquiry", time: "Send enquiry" }
		]
	},
	{
		name: "Dr Deepak Behera",
		specialization: "Cardiology",
		description: "Prominent Consultant Cardiologist based in Odisha, specializing in advanced cardiac diagnostics and intervention. Holds MBBS, MD in General Medicine, and DM in Cardiology. Widely recognized for practicing at Swaraj Hospital and Research Institute, Balangir.",
		email: null,
		experienceYears: 16,
		bookingFee: 500,
		profileImage: "/doctors/dr-deepak-behera.png",
		schedules: [
			{ day: "Mon-Thu", time: "10:00 am to 2:00 pm" }
		]
	},
	{
		name: "Dr Anil Ku. Patra",
		specialization: "Neurology",
		description: "Highly skilled Consultant Neurologist practicing in Western Odisha, specializing in the comprehensive diagnosis and treatment of brain, spine, and nerve disorders including migraines, epilepsy, strokes, and movement disorders.",
		email: null,
		experienceYears: 15,
		bookingFee: 500,
		profileImage: "/doctors/dr-anil-ku-patra.png",
		schedules: [
			{ day: "Saturday", time: "9:30 am to 1:30 pm" }
		]
	},
	{
		name: "Dr Puspanjali Mishra",
		specialization: "Paediatrics",
		description: "Veteran Senior Consultant Paediatrician who has long served in the Balangir government healthcare system, notably as the Chief District Medical Officer (CDMO) for the Balangir district.",
		email: null,
		experienceYears: 25,
		bookingFee: 500,
		profileImage: "/doctors/dr-puspanjali-mishra.png",
		schedules: [
			{ day: "On Enquiry", time: "Send enquiry" }
		]
	},
	{
		name: "Dr Debakanta Mishra",
		specialization: "Gastroenterology",
		description: "Highly accomplished Senior Consultant Gastroenterologist and Hepatologist. Specializes in treating complex liver, pancreas, and gastrointestinal conditions, and is well-regarded for performing advanced therapeutic endoscopic procedures (like ERCP, colonoscopies, and enteroscopies).",
		email: null,
		experienceYears: 15,
		bookingFee: 500,
		profileImage: "/doctors/dr-debakanta-mishra.png",
		schedules: [
			{ day: "Once a month", time: "Will be posted when decided" }
		]
	},
	{
		name: "Dr Subhasis Biswal",
		specialization: "Nephrology",
		description: "Elite Consultant Nephrologist and Transplant Physician practicing in Odisha, specializing in advanced kidney care, dialysis management, and renal transplantation.",
		email: null,
		experienceYears: 14,
		bookingFee: 500,
		profileImage: "/doctors/dr-subhasis-biswal.png",
		schedules: [
			{ day: "Once a month", time: "Will be posted when decided" }
		]
	},
	{
		name: "Dr Niranjan Padhy",
		specialization: "Urology",
		description: "Highly capable Consultant Urologist who practices in Bhubaneswar, Odisha, specializing in complex kidney and urinary tract care.",
		email: null,
		experienceYears: 15,
		bookingFee: 500,
		profileImage: "/doctors/dr-niranjan-padhy.png",
		schedules: [
			{ day: "Once a month", time: "Will be posted when decided" }
		]
	}
];

async function seed() {
	console.log("Starting Doctor Seed...");

	for (const doc of doctorsData) {
		// 1. Ensure Specialization exists
		let spec = await prisma.specialization.findUnique({
			where: { name: doc.specialization }
		});

		if (!spec) {
			spec = await prisma.specialization.create({
				data: {
					name: doc.specialization,
					description: `Department of ${doc.specialization}`
				}
			});
			console.log(`Created Specialization: ${spec.name}`);
		}

		// 2. Check if doctor exists by name
		const existingDoc = await prisma.doctor.findFirst({
			where: { name: doc.name }
		});

		if (existingDoc) {
			await prisma.doctor.update({
				where: { id: existingDoc.id },
				data: {
					specializationId: spec.id,
					experienceYears: doc.experienceYears,
					bookingFee: doc.bookingFee,
					profileImage: doc.profileImage,
					description: doc.description,
					email: doc.email,
					schedules: doc.schedules,
					isActive: true
				}
			});
			console.log(`Updated Doctor: ${doc.name}`);
		} else {
			await prisma.doctor.create({
				data: {
					name: doc.name,
					specializationId: spec.id,
					experienceYears: doc.experienceYears,
					bookingFee: doc.bookingFee,
					profileImage: doc.profileImage,
					description: doc.description,
					email: doc.email,
					schedules: doc.schedules,
					isActive: true
				}
			});
			console.log(`Created Doctor: ${doc.name}`);
		}
	}

	console.log("Seeding completed successfully!");
}

seed()
	.catch((e) => {
		console.error("Error seeding doctors:", e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
