---
title: "Lorem Ipsum"
website: "paperless.bearblog.dev"
date: "2025-03-13"
tags: [history, lorem-ipsum, tech]
---

> Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...

I was going to put a random computer-generated Lorem Ipsum text as my first blog, but I decided to write about it instead. Even though I am a college student who has just dived his feet into the vast ocean of computer science, Lorem Ipsum text is something that I have encountered multiple times as placeholder text, but I never really questioned its existence until now, so I came up with the following questions:

# Who was the creator?

Lorem Ipsum goes back to 1^st^-Century BC, which, according to Wikipedia, is a text derived from a corrupted version of "De finibus bonorum et malorum" (a Socratic dialogue written by the Roman orator Cicero). The words are altered, added, and removed to make it nonsensical. Lorem Ipsum itself is derived from *Dolorem Ipsum,* meaning *pain itself.*

Later, in the 15^th^ Century, an unknown typesetter stumbled upon the scrambled parts of Lorem Ipsum. In 1960, the passage gained even more popularity with Letraset's dry-transfer sheets. What people in the earlier Printing Industry wanted was a text to showcase their typography without it being controversial, and the nonsensical text of Lorem Ipsum fits the description.

Soon, this text made its way into the digital world via Aldus PageMaker (which later merged with Adobe).

Lorem Ipsum has a rich history, and <https://loremipsum.io/> does a better job of showcasing that.
# Controversy!

It is kind of ironic how a text, which was used as an alternative to controversial text, is now in itself a topic of controversy. The rebels claim that Lorem Ipsum promotes design over content, and it's much more serious than it sounds.

You might have noticed we now focus more on how the text looks than the text itself. A website's worth is now measured on the basis of animations than the actual content, and slowly, this mentality is gonna seep into the blogging environment as well. 

Maybe I am exaggerating, but still, it's true to some extent. Natural content is dying. Don't get me wrong, various tools like Grammarly are wonderful as they help people, who struggle to write, express their opinions. But there is a line that we must draw, especially with the new AI stuff[^1].

# How is a computer able to generate an infinite amount of such text?

The original text is not infinite, but modern computers can rearrange it to make it feel like one. There are many ways, but I like the Markov Chain method, as it's something unique and easy to implement.

The Markov Model learns which words typically follow others in the sample text and generates a sequence based on those probabilities.

1. Train the Markov Model
	- Use a sample Lorem Ipsum text as a training dataset.
	- Tokenize the words and build the Markov Chain dictionary. 

2. Markov Chain dictionary contains each word mapped with the possible next word according to the sample text. During the time of text generation, we look at the dictionary and choose a random next word to continue the sentence.

```python
import random

def generate_text(chain, length=10):
    word = random.choice(list(chain)).capitalize()
    output = [word]

    for _ in range(length - 1):
        word = random.choice(chain.get(word, list(chain))) 
        output.append(word)

    return " ".join(output)

lorem_text = """
    Lorem ipsum dolor sit amet consectetur adipiscing elit. 
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
"""

words = lorem_text.split()
markov_chain = {w: [] for w in words[:-1]}

for i in range(len(words) - 1):
    markov_chain[words[i]].append(words[i + 1])

print(generate_text(markov_chain, 10))
```

Output: `Elit. dolor sit amet consectetur adipiscing elit. Sed do eiusmod`

More sample text leads to better generation. You can also add constraints such as, always starting with Lorem Ipsum (in this case, as the sample data is too small, it would always give the same result if I used the constraint). 

# Conclusion

For something that was gonna be a random text just for the sake of exploring how bear blogs work, this was a very informative dive into Lorem Ipsum. I didn't know a nonsensical text could have such a rich history behind it. 

# References  

1. <https://en.wikipedia.org/wiki/Lorem_ipsum>
2. <https://loremipsum.io/>

---

[^1]: I am NOT against AI. It is a fascinating topic that pushes us further towards the collectively dreamt, advanced civilization. But there is a fine line between using AI to improve writing and replacing human expression altogether.