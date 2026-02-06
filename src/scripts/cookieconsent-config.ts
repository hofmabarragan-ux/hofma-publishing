import * as CookieConsent from 'vanilla-cookieconsent';

const updateGoogleConsent = (analyticsAdsGranted: boolean) => {
	if (typeof window !== 'undefined') {
		const w = window as any;
		w.dataLayer = w.dataLayer || [];
		const consent = {
			ad_storage: analyticsAdsGranted ? 'granted' : 'denied',
			ad_user_data: analyticsAdsGranted ? 'granted' : 'denied',
			ad_personalization: analyticsAdsGranted ? 'granted' : 'denied',
			analytics_storage: analyticsAdsGranted ? 'granted' : 'denied',
		};
		w.gtag('consent', 'update', consent);
	}
};

const loadMetaPixel = () => {
	if (typeof window === 'undefined' || (window as any).fbq) return;

	const f = window as any;
	const b = document;
	const e = 'script';
	const v = 'https://connect.facebook.net/en_US/fbevents.js';

	const n = (f.fbq = function () {
		n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
	});
	if (!f._fbq) f._fbq = n;
	n.push = n;
	n.loaded = !0;
	n.version = '2.0';
	n.queue = [];

	const t = b.createElement(e) as HTMLScriptElement;
	t.async = !0;
	t.src = v;
	const s = b.getElementsByTagName(e)[0];
	s.parentNode?.insertBefore(t, s);

	n('init', '914277844389882');
	n('track', 'PageView');
};

const handleConsentUpdate = () => {
	const analyticsAdsAccepted = CookieConsent.acceptedCategory('analytics_ads');
	updateGoogleConsent(analyticsAdsAccepted);
	if (analyticsAdsAccepted) {
		loadMetaPixel();
	}
};

CookieConsent.run({
	guiOptions: {
		consentModal: {
			layout: 'box inline',
			position: 'bottom center',
			equalWeightButtons: true,
			flipButtons: false,
		},
		preferencesModal: {
			layout: 'box',
			equalWeightButtons: true,
			flipButtons: false,
		},
	},
	categories: {
		necessary: {
			enabled: true,
			readOnly: true,
		},
		functionality: {
			enabled: false,
		},
		analytics_ads: {
			enabled: false,
		},
	},
	language: {
		default: 'en',
		translations: {
			en: {
				consentModal: {
					title: 'We use cookies',
					description:
						'We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept all", you consent to our use of cookies.',
					acceptAllBtn: 'Accept all',
					acceptNecessaryBtn: 'Reject all',
					showPreferencesBtn: 'Manage preferences',
					footer: '',
				},
				preferencesModal: {
					title: 'Cookie preferences',
					acceptAllBtn: 'Accept all',
					acceptNecessaryBtn: 'Reject all',
					savePreferencesBtn: 'Save preferences',
					closeIconLabel: 'Close',
					sections: [
						{
							title: 'Cookie usage',
							description:
								'We use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want.',
						},
						{
							title: 'Strictly necessary cookies',
							description:
								'These cookies are essential for the proper functioning of the website. Without these cookies, the website would not work properly. They cannot be disabled.',
							linkedCategory: 'necessary',
						},
						{
							title: 'Functionality cookies',
							description:
								'These cookies enable enhanced functionality and personalization, such as remembering your preferences.',
							linkedCategory: 'functionality',
						},
						{
							title: 'Analytics & Advertising',
							description:
								'These cookies help us understand how visitors interact with our website (analytics) and allow us to show you relevant advertisements. They may be set by us or by third-party providers.',
							linkedCategory: 'analytics_ads',
						},
					],
				},
			},
		},
	},
	onFirstConsent: handleConsentUpdate,
	onConsent: handleConsentUpdate,
	onChange: handleConsentUpdate,
});
