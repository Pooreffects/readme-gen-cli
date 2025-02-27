import { render } from 'cfonts';
import kleur from 'kleur';

export function showBanner() {
  try {
    const output = render('Readme.dd', {
      font: 'block',
      colors: ['cyan'],
      align: 'left',
      gradient: ['gray', 'cyan'],
      transitionGradient: true,
      lineSpacing: 0,
      env: 'node',
      maxLength: '35',
      raw: true,
    });
    console.log(output.string || output);
  } catch (err) {
    console.error(kleur.red('Error generating banner:'), err);
  }
}
