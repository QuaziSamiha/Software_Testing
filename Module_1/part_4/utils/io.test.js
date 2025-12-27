import { it, expect } from "vitest";
import { saveTokenToFile } from "./io";

vi.mock("fs");

it("should store the token to the file", async () => {
  const data = "dummy token";
  const fileName = "token.txt";

  await expect(saveTokenToFile(data, fileName)).resolves.toBeUndefined();
  expect(fs.writeFile).toHaveBeenCalled();
});
