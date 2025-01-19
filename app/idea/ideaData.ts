const ideaData: ideaDataProject[] = [
	{
		name: "عينا سلسبيلا",
		explanation: [
			`نستطيع أن نختصر مشروع عينا سلسبيلا بالكامل حول فكرة حجب
						المواقع الإباحية خاصة و كل ما هو حرام عامة من على
						الانترنت و حماية اطفالنا من مصادر الشر هذه التي لم تدع
						احدا بدون أذية`,
			`و هذا المشروع في رأينا يحمل الأولوية القصوى بين أقرانه
						لما أصبح عليه حال شبابنا و أطفالنا في هذه الأيام. و قد
						من الله علينا بفضل الله بخادم لأسماء النطاقات (dns
						server) لحجب المواقع الإباحية و الإعلانات و غيرها كطبقة
						أولى للحماية، و هدفنا بإذن الله التوسع بعد ذلك و تقوية
						الحماية من ناحية صعوبة تخطيها و إلغائها و جودة حجبها
						بإذن الله تعالى بمشاريع عديدة`,
		],
	},
	{
		name: "نباتا حسنا",
		explanation: [
			`أما نباتا حسنا فهو على عكس ما فات، يعمل على توفير
            محتوى هادف للأطفال سواء كان كأفلام كرتون نجمعها مُنْتَجَةٌ بالفعل أو
            بإنتاج أفلام كرتون خاصة بنا إن شاء الله تعالى حين يتاح لنا ذلك
            لمزاحمة المحتوى الغربي المليء بالعيوب`,
			`و ليس هذا المشروع قائما على أفلام الكرتون فحسب، بل بإذن الله 
            كل ما يتيسر لنا من أدوات مدرسية أو كتب تلوين للأطفال تحمل بين 
            صفحاتها ما يساعد على تربية جيل صالح بإذن الله`,
		],
	},
	{
		name: "زدني علما",
		explanation: [
			`لا يخفى على أحد نقص المحتوى العلمي العربي بل نحن
			ننصح بتعلم اللغة الإنجليزية لمن أراد أن يتعمق في أي فن أو علم.
            فيأخذنا هذا إلى المشروع الثالث من مفازا و الذي يهدف بإذن الله
            إلى توفير محتوى علمي بكفائة و جودة عالية بعون الله تعالى`,
		],
	},
];

export default ideaData;

type ideaDataProject = {
	name: string;
	explanation: string[];
};
