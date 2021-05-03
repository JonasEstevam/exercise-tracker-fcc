class DateFormater {
  execute(date: Date) {
    const dateFormatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "UTC",
      day: "2-digit",
      month: "short",
      weekday: "short",
      year: "numeric",
    });

    return dateFormatter.format(date).replace(/,/g, "");
  }
}

export { DateFormater };
