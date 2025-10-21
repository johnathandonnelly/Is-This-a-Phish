# Contributing to *Is This a Phish?*

Thanks for your interest in contributing! Whether you're adding a feature, fixing a bug, or improving documentation, your help is greatly appreciated.

## How to Contribute

> **Note:** Please remember to add a "Signed-off-by" line to your commits using `git commit -s`. This certifies you have the right to contribute the code and agree to license it under AGPLv3.

1. **Fork the repository**
2. **Create a new branch**
    ```powershell
    git checkout -b feature/your-feature-name
    ```
3. **Make your changes**
4. **Commit clearly**
    ```powershell
    git commit -m "Add feature: your feature name"
    ```
5. **Push to your fork**
    ```powershell
    git push origin feature/your-feature-name
    ```
6. **Open a pull request**

    Describe your changes clearly.

## Guidelines

* Keep your code clean and readable.
* Use clear, descriptive commit messages.
* Keep UI changes accessible and consistent.
* If you're unsure, open an issue or discussion first.

## Reporting

Found a bug or have an idea? Please open an issue and provide:

* A clear description.
* Steps to reproduce (if applicable).
* Screenshots or code samples if helpful.

Thanks again for helping improve *Is This a Phish?*.

---

## Developer Certificate of Origin (DCO)

By making a contribution to this project, you certify that you have the legal right to do so and agree to license your contribution under the AGPLv3 license.

To certify your contributions, please add a "Signed-off-by" line to your commit messages. This can be done easily by using:

```powershell
git commit -s
```

which adds a line like:

```powershell
Signed-off-by: Your Name <your.email@example.com>
```

For more information, see the [Developer Certificate of Origin](https://developercertificate.org/)

## Fixing Missing Sign-Offs

If your commits are missing the required sign-off, you can amend your commits locally:

* For the last commit:

    ```powershell
    git commit --amend -s
    git push --force-with-lease
    ```

* For multiple commits, use interactive rebase:
    ```powershell
    git rebase -i HEAD~n
    ```

Then, for each commit, amend with sign-off and force-push.

If you need help, feel free to ask in an issue or discussion.

---

By submitting a contribution, you agree to license your work under the same license as the project (AGPLv3).