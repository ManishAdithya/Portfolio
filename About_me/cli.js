 document.addEventListener('DOMContentLoaded', function() {
      const input = document.getElementById('input');
      const output = document.getElementById('output');
      const bannerText = `
      
'########:'##::::'##::'#######::'##::: ##:'########:::'#######::'##::: ##:
 ##.....:: ##:::: ##:'##.... ##: ###:: ##: ##.... ##:'##.... ##: ###:: ##:
 ##::::::: ##:::: ##:..::::: ##: ####: ##: ##:::: ##: ##:::: ##: ####: ##:
 #######:: #########::'#######:: ## ## ##: ########:: ##:::: ##: ## ## ##:
...... ##: ##.... ##::...... ##: ##. ####: ##.. ##::: ##:::: ##: ##. ####:
'##::: ##: ##:::: ##:'##:::: ##: ##:. ###: ##::. ##:: ##:::: ##: ##:. ###:
. ######:: ##:::: ##:. #######:: ##::. ##: ##:::. ##:. #######:: ##::. ##:
:......:::..:::::..:::.......:::..::::..::..:::::..:::.......:::..::::..::

Welcome to 5h3nron's About Me page, Type "help" to see the commands you can use
      `;

      output.innerHTML = bannerText + '\n';

      const commands = {
        readme: 
        `
        Hello! I’m a Computer Science and Engineering student at Amrita Vishwa 
        Vidyapeetam with a keen interest in both AI and CyberSecurity. As a 
        member of Team bi0s, I dive into Android Security, where I explore the 
        intricacies of securing mobile applications and systems against 
        evolving threats.`,
        social: 
        `
        Find me on 

        GitHub         https://github.com/ManishAdithya
        Medium         https://medium.com/@5h3nron
        LinkedIn       https://www.linkedin.com/in/manish-adithya-p-v-215b32287/
        Telegram ID    The_5h3nron
        Instragram ID  manish._2004
        `,

        projects: 
        `
        Current projects include

            • AeroPulse        A device that sends real-time temperature details 
                               without the use of Wi-Fi (GSM project)

            • Real Followers   A Malicious Application which steals real time UI 
                               info 

            • SkyRadar         A Weather Extension that provides real-time 
                               updates on the temperature, humidity, and wind  
                               speed for any selected location`,

        help: 
        `
        AVAILABLE COMMANDS 

        readme    Know About Me :)
        social    My Social Media Profiles
        projects  Projects I did till date
        email     5h3nronpv@gmail.com (don't mail me pls)
        banner    Display the 5h3nron banner
        clear     You are not a human if you don't know what this does 
        help      You know what this command does 
        `,

        email: 
        `
        5h3nronpv@gmail.com (Please don't mail me, I am not really active on my  
        gmail. It's a loss at both ends)`,

        clear: function() {
          output.innerHTML = ''; 
        },
        banner: function() {
          output.innerHTML += bannerText + '\n'; 
        }
      };

      function processCommand(command) {
        if (commands[command]) {
          if (typeof commands[command] === 'function') {
            commands[command]();
          } 
          else if (command === 'help') {
            
            output.innerHTML += `$ ${command}\n<span class="white-text">${commands[command]}</span>\n`;
          } else {
            output.innerHTML += `$ ${command}\n${commands[command]}\n`;
          }
        } else {
          output.innerHTML += `$ ${command}\nCommand not found. Type "help" for a list of commands.\n`;
        }

        output.scrollTop = output.scrollHeight;
      }

      input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
          const command = input.value.trim(); 
          processCommand(command);
          input.value = '';
        }
      });
    });