import os


def makeCommits(days: int):
    if days < 1:
        os.system("git push")
    else:
        dates = f"{days} days ago"
        with open("data.txt", "a") as file:
            file.write(f"{dates} <- :: updated code base :: commit successful\n")

        # staging
        os.system("git add data.txt")

        # commit
        os.system('git commit --date="' + dates + '" -m "updated"')

        return days * makeCommits(days - 1)


makeCommits(60)
