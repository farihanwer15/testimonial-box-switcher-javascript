const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'bob',
    position: 'Marketing',
    photo:
      'data:image/jpeg;base64,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',
    text:
    "Hi there, Bob.I???m writing to ask if you wouldn???t mind giving us a short testimonial for our website. We???re updating a few pages, and I???m hoping to add something from you. It would link back to your site, so it???s actually a good thing for your SEO.Would this be ok with you? If this makes you even a little bit uncomfortable, no worries at all. But if you are ok with it, I can send you a very short blurb for you to review, or you can write a sentence or two and send it over. Whatever is easiest for you.    Thank you, Bob!",
  },
  {
    name: 'June Cha',
    position: 'Software Engineer',
    photo: 'https://randomuser.me/api/portraits/men/44.jpg',
    text:
      'This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!',
  },
  {
    name: 'Niskanen',
    position: 'Data Entry',
    photo: 'https://randomuser.me/api/portraits/men/68.jpg',
    text:
      "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him.",
  },
  {
    name: 'Sims',
    position: 'Receptionist',
    photo: 'https://randomuser.me/api/portraits/men/65.jpg',
    text:
      "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.",
  },
  {
    name: 'Jonathan',
    position: 'Graphic Designer',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text:
      "I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!",
  },
  {
    name: 'Sashao',
    position: 'Accountant',
    photo:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?=350&auto=compress&cs=tinysrgb',
    text:
      'This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!',
  },
  {
    name: 'Vepanen',
    position: 'Director',
    photo: 'https://randomuser.me/api/portraits/men/97.jpg',
    text:
      'This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.',
  },
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)