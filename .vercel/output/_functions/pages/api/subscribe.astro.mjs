import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { c as createInvalidVariablesError, g as getEnv$1, s as setOnSetGetEnv } from '../../chunks/runtime_BQkZHBb8.mjs';
export { renderers } from '../../renderers.mjs';

const schema = {"GOOGLE_SERVICE_ACCOUNT_EMAIL":{"context":"server","access":"secret","optional":true,"type":"string"},"GOOGLE_PRIVATE_KEY":{"context":"server","access":"secret","optional":true,"type":"string"},"GOOGLE_SHEET_ID":{"context":"server","access":"secret","optional":true,"type":"string"}};

function getEnvFieldType(options) {
  const optional = options.optional ? options.default !== void 0 ? false : true : false;
  let type;
  if (options.type === "enum") {
    type = options.values.map((v) => `'${v}'`).join(" | ");
  } else {
    type = options.type;
  }
  return `${type}${optional ? " | undefined" : ""}`;
}
const stringValidator = ({ max, min, length, url, includes, startsWith, endsWith }) => (input) => {
  if (typeof input !== "string") {
    return {
      ok: false,
      errors: ["type"]
    };
  }
  const errors = [];
  if (max !== void 0 && !(input.length <= max)) {
    errors.push("max");
  }
  if (min !== void 0 && !(input.length >= min)) {
    errors.push("min");
  }
  if (length !== void 0 && !(input.length === length)) {
    errors.push("length");
  }
  if (url !== void 0 && !URL.canParse(input)) {
    errors.push("url");
  }
  if (includes !== void 0 && !input.includes(includes)) {
    errors.push("includes");
  }
  if (startsWith !== void 0 && !input.startsWith(startsWith)) {
    errors.push("startsWith");
  }
  if (endsWith !== void 0 && !input.endsWith(endsWith)) {
    errors.push("endsWith");
  }
  if (errors.length > 0) {
    return {
      ok: false,
      errors
    };
  }
  return {
    ok: true,
    value: input
  };
};
const numberValidator = ({ gt, min, lt, max, int }) => (input) => {
  const num = parseFloat(input ?? "");
  if (isNaN(num)) {
    return {
      ok: false,
      errors: ["type"]
    };
  }
  const errors = [];
  if (gt !== void 0 && !(num > gt)) {
    errors.push("gt");
  }
  if (min !== void 0 && !(num >= min)) {
    errors.push("min");
  }
  if (lt !== void 0 && !(num < lt)) {
    errors.push("lt");
  }
  if (max !== void 0 && !(num <= max)) {
    errors.push("max");
  }
  if (int !== void 0) {
    const isInt = Number.isInteger(num);
    if (!(int ? isInt : !isInt)) {
      errors.push("int");
    }
  }
  if (errors.length > 0) {
    return {
      ok: false,
      errors
    };
  }
  return {
    ok: true,
    value: num
  };
};
const booleanValidator = (input) => {
  const bool = input === "true" ? true : input === "false" ? false : void 0;
  if (typeof bool !== "boolean") {
    return {
      ok: false,
      errors: ["type"]
    };
  }
  return {
    ok: true,
    value: bool
  };
};
const enumValidator = ({ values }) => (input) => {
  if (!(typeof input === "string" ? values.includes(input) : false)) {
    return {
      ok: false,
      errors: ["type"]
    };
  }
  return {
    ok: true,
    value: input
  };
};
function selectValidator(options) {
  switch (options.type) {
    case "string":
      return stringValidator(options);
    case "number":
      return numberValidator(options);
    case "boolean":
      return booleanValidator;
    case "enum":
      return enumValidator(options);
  }
}
function validateEnvVariable(value, options) {
  const isOptional = options.optional || options.default !== void 0;
  if (isOptional && value === void 0) {
    return {
      ok: true,
      value: options.default
    };
  }
  if (!isOptional && value === void 0) {
    return {
      ok: false,
      errors: ["missing"]
    };
  }
  return selectValidator(options)(value);
}

/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-check

// @ts-expect-error
/** @returns {string} */
// used while generating the virtual module
// biome-ignore lint/correctness/noUnusedFunctionParameters: `key` is used by the generated code
const getEnv = (key) => {
	return getEnv$1(key);
};

const _internalGetSecret = (key) => {
	const rawVariable = getEnv(key);
	const variable = rawVariable === '' ? undefined : rawVariable;
	const options = schema[key];

	const result = validateEnvVariable(variable, options);
	if (result.ok) {
		return result.value;
	}
	const type = getEnvFieldType(options);
	throw createInvalidVariablesError(key, type, result);
};

setOnSetGetEnv(() => {
	GOOGLE_SERVICE_ACCOUNT_EMAIL = _internalGetSecret("GOOGLE_SERVICE_ACCOUNT_EMAIL");
GOOGLE_PRIVATE_KEY = _internalGetSecret("GOOGLE_PRIVATE_KEY");
GOOGLE_SHEET_ID = _internalGetSecret("GOOGLE_SHEET_ID");

});
let GOOGLE_SERVICE_ACCOUNT_EMAIL = _internalGetSecret("GOOGLE_SERVICE_ACCOUNT_EMAIL");
let GOOGLE_PRIVATE_KEY = _internalGetSecret("GOOGLE_PRIVATE_KEY");
let GOOGLE_SHEET_ID = _internalGetSecret("GOOGLE_SHEET_ID");

const prerender = false;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const POST = async ({ request }) => {
  const headers = {
    "Content-Type": "application/json"
  };
  try {
    const body = await request.json();
    const { email, source = "website" } = body;
    if (!email || typeof email !== "string") {
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        { status: 400, headers }
      );
    }
    const trimmedEmail = email.trim().toLowerCase();
    if (!EMAIL_REGEX.test(trimmedEmail)) {
      return new Response(
        JSON.stringify({ error: "Please enter a valid email address" }),
        { status: 400, headers }
      );
    }
    if (!GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY || !GOOGLE_SHEET_ID) {
      console.error("Missing configuration");
      return new Response(
        JSON.stringify({ error: "Newsletter signup is not configured" }),
        { status: 500, headers }
      );
    }
    console.log("Key starts with:", GOOGLE_PRIVATE_KEY.substring(0, 20));
    const formattedKey = GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n").replace(/"/g, "");
    const serviceAccountAuth = new JWT({
      email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: formattedKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"]
    });
    const doc = new GoogleSpreadsheet(GOOGLE_SHEET_ID, serviceAccountAuth);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    await sheet.addRow({
      Date: (/* @__PURE__ */ new Date()).toLocaleString("da-DK", { timeZone: "Europe/Copenhagen" }),
      Email: trimmedEmail,
      Source: String(source).slice(0, 100)
    });
    return new Response(
      JSON.stringify({ success: true, message: "Tak for din tilmelding!" }),
      { status: 200, headers }
    );
  } catch (err) {
    console.error("Vercel Runtime Error:", err);
    return new Response(
      JSON.stringify({ error: "Kunne ikke oprette forbindelse. Prøv igen senere." }),
      { status: 500, headers }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
