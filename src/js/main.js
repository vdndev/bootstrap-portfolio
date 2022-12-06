import '../styles/style.scss'
import * as bootstrap from "bootstrap";

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map($el => new bootstrap.Tooltip($el));
