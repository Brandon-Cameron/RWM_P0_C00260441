import { expect, test } from '@playwright/test';

test('has expected h1', async ({ page }) => {
    await page.goto('/lab/checklist');
    await expect(page.getByTestId('title')).toHaveText('Progress Checklist');
});
