export function formatRupiah(value: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  })
    .format(value)
    .slice(0, -3);
}

export function formatShortRupiah(value: number): string {
  return (
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    })
      .format(value)
      .slice(0, -7) + "k"
  );
}
