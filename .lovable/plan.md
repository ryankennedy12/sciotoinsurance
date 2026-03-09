

## Plan: Add H&G Connect 2026 Event Tracking to Admin Dashboard

The H&G Connect leads are already identifiable in the database — they have `additional_info = "H&G Connect 2026 Event Lead"`. We just need to surface that count in the admin dashboard.

### Changes to `src/pages/admin/AdminDashboard.tsx`

1. **Add a 5th metric card** — "H&G Connect Signups" that counts all leads where `additional_info` equals `"H&G Connect 2026 Event Lead"`. Uses a `QrCode` icon from lucide-react.

2. **Update the metrics grid** — Change from `lg:grid-cols-4` to `lg:grid-cols-5` to accommodate the new card.

3. **Tag event leads in the Recent Activity list** — Show an "H&G Connect" badge next to leads that came from the QR code so they're visually distinguishable.

### No database changes needed
The data is already being stored correctly with the `additional_info` field as the identifier. This is purely a frontend change to surface the count.

