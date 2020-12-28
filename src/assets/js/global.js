import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 
  .sidebar,.sidebar .sidebar-wrapper, .off-canvas-sidebar .sidebar-wrapper,.logo{
    background-color: ${({ theme }) => theme.body};
  }
.card{
  background-color:  ${({ theme }) => theme.card};
  color:  ${({ theme }) => theme.card_text} !important;
}
.sidebar[data-color="white"] .nav li a, .sidebar[data-color="white"] .nav li a i, .sidebar[data-color="white"] .nav li a[data-toggle="collapse"], .sidebar[data-color="white"] .nav li a[data-toggle="collapse"] i, .sidebar[data-color="white"] .nav li a[data-toggle="collapse"] ~ div > ul > li .sidebar-mini-icon, .sidebar[data-color="white"] .nav li a[data-toggle="collapse"] ~ div > ul > li > a, .off-canvas-sidebar[data-color="white"] .nav li a, .off-canvas-sidebar[data-color="white"] .nav li a i, .off-canvas-sidebar[data-color="white"] .nav li a[data-toggle="collapse"], .off-canvas-sidebar[data-color="white"] .nav li a[data-toggle="collapse"] i, .off-canvas-sidebar[data-color="white"] .nav li a[data-toggle="collapse"] ~ div > ul > li .sidebar-mini-icon, .off-canvas-sidebar[data-color="white"] .nav li a[data-toggle="collapse"] ~ div > ul > li > a,.sidebar .nav p, .off-canvas-sidebar .nav p,.card-stats .card-footer .stats,.card-stats .card-body .numbers .card-category,.category, .card-category, text,.navbar.navbar-transparent a:not(.dropdown-item):not(.btn){
  color:  ${({ theme }) => theme.card_text} !important;

}

  .main-panel {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }
  
  .sidebar, .off-canvas-sidebar{

  }

  
  `