const apiKey = '709c760ca882a9b672ea5c1c'; 
const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

// Predefined list of countries and their currencies
const countries = {
    "USD": "United States Dollar",
    "EUR": "Euro",
    "GBP": "British Pound",
    "JPY": "Japanese Yen",
    "AUD": "Australian Dollar",
    "CAD": "Canadian Dollar",
    "CHF": "Swiss Franc",
    "CNY": "Chinese Yuan",
    "SEK": "Swedish Krona",
    "NZD": "New Zealand Dollar",
    "AFN": "Afghan Afghani",
    "ALL": "Albanian Lek",
    "DZD": "Algerian Dinar",
    "AOA": "Angolan Kwanza",
    "ARS": "Argentine Peso",
    "AMD": "Armenian Dram",
    "AWG": "Aruban Florin",
    "AZN": "Azerbaijani Manat",
    "BSD": "Bahamian Dollar",
    "BHD": "Bahraini Dinar",
    "BDT": "Bangladeshi Taka",
    "BBD": "Barbadian Dollar",
    "BYN": "Belarusian Ruble",
    "BZD": "Belize Dollar",
    "BMD": "Bermudian Dollar",
    "BTN": "Bhutanese Ngultrum",
    "BOB": "Bolivian Boliviano",
    "BAM": "Bosnia and Herzegovina Convertible Mark",
    "BWP": "Botswana Pula",
    "BRL": "Brazilian Real",
    "BND": "Brunei Dollar",
    "BGN": "Bulgarian Lev",
    "BIF": "Burundian Franc",
    "CVE": "Cape Verdean Escudo",
    "KHR": "Cambodian Riel",
    "XAF": "Central African CFA Franc",
    "CLP": "Chilean Peso",
    "COP": "Colombian Peso",
    "KMF": "Comorian Franc",
    "CDF": "Congolese Franc",
    "CRC": "Costa Rican Colón",
    "HRK": "Croatian Kuna",
    "CUP": "Cuban Peso",
    "CZK": "Czech Koruna",
    "DKK": "Danish Krone",
    "DJF": "Djiboutian Franc",
    "DOP": "Dominican Peso",
    "EGP": "Egyptian Pound",
    "ERN": "Eritrean Nakfa",
    "SZL": "Eswatini Lilangeni",
    "ETB": "Ethiopian Birr",
    "FJD": "Fijian Dollar",
    "GMD": "Gambian Dalasi",
    "GEL": "Georgian Lari",
    "GHS": "Ghanaian Cedi",
    "GTQ": "Guatemalan Quetzal",
    "GNF": "Guinean Franc",
    "GYD": "Guyanese Dollar",
    "HTG": "Haitian Gourde",
    "HNL": "Honduran Lempira",
    "HKD": "Hong Kong Dollar",
    "HUF": "Hungarian Forint",
    "ISK": "Icelandic Króna",
    "INR": "Indian Rupee",
    "IDR": "Indonesian Rupiah",
    "IRR": "Iranian Rial",
    "IQD": "Iraqi Dinar",
    "ILS": "Israeli New Shekel",
    "JMD": "Jamaican Dollar",
    "JOD": "Jordanian Dinar",
    "KZT": "Kazakhstani Tenge",
    "KES": "Kenyan Shilling",
    "KWD": "Kuwaiti Dinar",
    "KGS": "Kyrgyzstani Som",
    "LAK": "Lao Kip",
    "LBP": "Lebanese Pound",
    "LSL": "Lesotho Loti",
    "LRD": "Liberian Dollar",
    "LYD": "Libyan Dinar",
    "MOP": "Macanese Pataca",
    "MKD": "Macedonian Denar",
    "MGA": "Malagasy Ariary",
    "MWK": "Malawian Kwacha",
    "MYR": "Malaysian Ringgit",
    "MVR": "Maldivian Rufiyaa",
    "MRU": "Mauritanian Ouguiya",
    "MUR": "Mauritian Rupee",
    "MXN": "Mexican Peso",
    "MDL": "Moldovan Leu",
    "MNT": "Mongolian Tögrög",
    "MAD": "Moroccan Dirham",
    "MZN": "Mozambican Metical",
    "MMK": "Myanmar Kyat",
    "NAD": "Namibian Dollar",
    "NPR": "Nepalese Rupee",
    "ANG": "Netherlands Antillean Guilder",
    "TWD": "New Taiwan Dollar",
    "NIO": "Nicaraguan Córdoba",
    "NGN": "Nigerian Naira",
    "KPW": "North Korean Won",
    "NOK": "Norwegian Krone",
    "OMR": "Omani Rial",
    "PKR": "Pakistani Rupee",
    "PAB": "Panamanian Balboa",
    "PGK": "Papua New Guinean Kina",
    "PYG": "Paraguayan Guaraní",
    "PEN": "Peruvian Sol",
    "PHP": "Philippine Peso",
    "PLN": "Polish Złoty",
    "QAR": "Qatari Riyal",
    "RON": "Romanian Leu",
    "RUB": "Russian Ruble",
    "RWF": "Rwandan Franc",
    "SHP": "Saint Helena Pound",
    "WST": "Samoan Tālā",
    "STN": "São Tomé and Príncipe Dobra",
    "SAR": "Saudi Riyal",
    "RSD": "Serbian Dinar",
    "SCR": "Seychellois Rupee",
    "SLL": "Sierra Leonean Leone",
    "SGD": "Singapore Dollar",
    "SBD": "Solomon Islands Dollar",
    "SOS": "Somali Shilling",
    "ZAR": "South African Rand",
    "KRW": "South Korean Won",
    "SSP": "South Sudanese Pound",
    "LKR": "Sri Lankan Rupee",
    "SDG": "Sudanese Pound",
    "SRD": "Surinamese Dollar",
    "NOK": "Svalbard and Jan Mayen Krone",
    "SZL": "Swazi Lilangeni",
    "SEK": "Swedish Krona",
    "CHF": "Swiss Franc",
    "SYP": "Syrian Pound",
    "TJS": "Tajikistani Somoni",
    "TZS": "Tanzanian Shilling",
    "THB": "Thai Baht",
    "TOP": "Tongan Paʻanga",
    "TTD": "Trinidad and Tobago Dollar",
    "TND": "Tunisian Dinar",
    "TRY": "Turkish Lira",
    "TMT": "Turkmenistani Manat",
    "UGX": "Ugandan Shilling",
    "UAH": "Ukrainian Hryvnia",
    "AED": "United Arab Emirates Dirham",
    "UYU": "Uruguayan Peso",
    "UZS": "Uzbekistani Soʻm",
    "VUV": "Vanuatu Vatu",
    "VES": "Venezuelan Bolívar",
    "VND": "Vietnamese Đồng",
    "YER": "Yemeni Rial",
    "ZMW": "Zambian Kwacha",
    "ZWL": "Zimbabwean Dollar"
};

document.addEventListener('DOMContentLoaded', function () {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const currencyList = Object.keys(data.conversion_rates);
            populateCurrencyDropdowns(currencyList);
        })
        .catch(error => console.error('Error fetching exchange rates:', error));
});

function populateCurrencyDropdowns(currencyList) {
    const fromCurrency = document.getElementById('from-currency');
    const toCurrency = document.getElementById('to-currency');

    currencyList.forEach(currency => {
        const countryName = countries[currency] || currency;

        const option1 = document.createElement('option');
        option1.value = currency;
        option1.textContent = `${countryName} (${currency})`;
        fromCurrency.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = currency;
        option2.textContent = `${countryName} (${currency})`;
        toCurrency.appendChild(option2);
    });
}

function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    if (amount === "" || isNaN(amount)) {
        alert("Please enter a valid amount");
        return;
    }

    const conversionUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`;

    fetch(conversionUrl)
        .then(response => response.json())
        .then(data => {
            const convertedAmount = data.conversion_result;
            document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
        })
        .catch(error => console.error('Error converting currency:', error));
}
