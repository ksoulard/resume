import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'
import Project from './Project/Project'
import './Projects.css'

const panes = [
    { menuItem: 'System', render: () =>
    <Tab.Pane>
      <div className="row projects-wrapper">
      <table className="table">
      <thead>
      <tr>
          <th scope="col" className="table-head">System languages</th>
          <th scope="col" className="table-head">system Environnement</th>
          <th scope="col" className="table-head">System tools</th>
          <th scope="col" className="table-head">Network notions</th>
      </tr>
      </thead>
  <tbody>
    <tr>
        <td>C / C++</td>
        <td>OSX</td>
        <td>gdb kgdb</td>
        <td>tcp udp</td>
    </tr>
    <tr>
        <td>asm</td>
        <td>linux</td>
        <td>gcc clang valgrind</td>
        <td>http dns ftp ldap ssh</td>
    </tr>
  
    <tr>
        <td>python</td>
        <td>FreeBSD</td>
        <td> git docker vmware </td>
        <td>ipv4 ipv6 icmp</td>
    </tr>
    <tr>
        <td>shellscript</td>
        <td>Raspbian</td>
        <td>vim atom vsc xcode</td>
        <td></td>
    </tr>
  </tbody>
  </table>
        <div className="col-12 project-pres">
            <Project url={'https://github.com/Kukurbitak/42_school-projects/tree/master/42sh'} name={'42sh'} type={'System / Shell'} techno={'C'} desc={'42sh is a simple POSIX shell like `sh` with some builtins.'} />
        </div>
        <div className="col-12 project-pres">
            <Project url={'https://github.com/Kukurbitak/42_school-projects/tree/master/ft_strace'} name={'strace'} type={'Systeme / Kernel interface'} techno={'C'} desc={'Strace, a tool that allows you to list all the system calls made by a running program.'} />
        </div>
        <div className="col-12 project-pres">
            <Project url={'https://github.com/Kukurbitak/42_school-projects/tree/master/nm_otool'} name={'nm - otool'} type={'System / ELF'} techno={'C'} desc={'A simple clone of nm and otool binaries.'} />
        </div>
        <div className="col-12 project-pres">
            <Project url={'https://github.com/Kukurbitak/42_school-projects/tree/master/ft_ping'} name={'ping'} type={'System / icmp'} techno={'C'} desc={'A simple clone of ping binary.'} />
        </div>  
        <div className="col-12 project-pres-bottom">
            <Project url={'https://github.com/Kukurbitak/42_school-projects/tree/master/ft_p'} name={'ft_p'} type={'System / tcp'} techno={'C'} desc={'A client / server similar to ftp'} />
        </div>   
      </div>
  </Tab.Pane> },
  { menuItem: 'Security', render: () => 
  <Tab.Pane>
    <div className="row projects-wrapper">
    <table className="table">
  <thead>
    <tr>
      <th scope="col" className="table-head">Reverse enginnering tools</th>
      <th scope="col" className="table-head">Web and Network tools</th>
      <th scope="col" className="table-head">Reverse enginnering notions</th>
      <th scope="col" className="table-head">web and network notions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>gdb gdb-peda kgdb</td>
        <td>Curl</td>
        <td>stack and heap buffer overflow</td>
        <td>SQL injection</td>
    </tr>
    <tr>
        <td>Radare2</td>
        <td>Wireshark</td>
        <td>format string</td>
        <td>Cross-site scripting</td>
    </tr>

    <tr>
        <td>ROPgadget</td>
        <td>Burp suit</td>
        <td>Race condition</td>
        <td>Authentification exploit</td>
    </tr>
    <tr>
        <td>strace ptrace</td>
        <td>nmap netcat</td>
        <td>Shellcoding</td>
        <td>Code injection</td>
    </tr>
  </tbody>
</table>
        <div className="col-12 project-pres">
            <Project url={'https://github.com/Kukurbitak/42_school-projects/tree/master/rainfall'} name={'rainfall'} type={'Security / Reverse enginnering'} techno={'asm'} desc={'Rainfall is an applicative security projects for studies basic overflow technical (heap, stack, int ...) format string. Understanding the asm x86-x64. All of this without protections like ASLR, PIE, NX, RELRO SSP.'} />
        </div>
        <div className="col-12 project-pres">
            <Project url={'https://github.com/Kukurbitak/42_school-projects/tree/master/override'} name={'override'} type={'Security / Reverse enginnering'} techno={'asm'} desc={'Override is an applicative security projects for studies simple and advanced overflow technical (heap, stack, int ...) format string. Understanding the asm x86-x64. All of this with some protections like PIE, NX, RELRO SSP.'} />
        </div>
        <div className="col-12 project-pres-bottom">
            <Project url={'https://github.com/Kukurbitak/42_school-projects/tree/master/famine'} name={'famine'} type={'Virus / Low level programming'} techno={'asm'} desc={'Famine is a simple virus that run on linux written in asm to infect elf64 binaries.'} />
        </div>
    </div>
  </Tab.Pane> }
];

class Projects extends Component {
      render() {
    
        return (
          <div className="row">
            <div className="col-12">
            <Tab
              menu={{inverted: true, attached: false, tabular: false, background: 'black', }}
              panes={panes}
            />  
            </div>
          </div>
        )
      }
}

export default Projects