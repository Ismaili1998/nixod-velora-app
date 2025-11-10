export function getMessageFor400(errors) {
  if (!errors || typeof errors !== "object") return "Invalid error response.";

  const errorMessages = Object.entries(errors).map(
    ([field, messages]) =>
      `${field.replace(/_/g, " ")}: ${
        Array.isArray(messages) ? messages.join(", ") : messages
      }`
  );

  return `\n ${errorMessages.join("\n")}`;
}
